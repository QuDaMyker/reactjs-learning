import axios from 'axios';

import { useAuthStore } from '../stores/authStore';
import { mockApiAdapter } from './mockServer';

export const apiClient = axios.create({
  adapter: mockApiAdapter,
});

let isRefreshing = false;
let refreshQueue = [];

function resolveQueue(error, token = null) {
  refreshQueue.forEach((entry) => {
    if (error) {
      entry.reject(error);
      return;
    }

    entry.resolve(token);
  });

  refreshQueue = [];
}

apiClient.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  config.headers = config.headers || {};

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const store = useAuthStore.getState();

    if (status !== 401 || originalRequest?._retry || originalRequest?.url === '/auth/refresh') {
      if (status === 401 && originalRequest?.url === '/auth/refresh') {
        store.clearSession();
      }
      return Promise.reject(error);
    }

    if (!store.refreshToken) {
      store.clearSession();
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        refreshQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return apiClient(originalRequest);
        })
        .catch((queueError) => Promise.reject(queueError));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshResponse = await apiClient.post('/auth/refresh', {
        refreshToken: store.refreshToken,
      });

      const session = {
        user: store.user,
        accessToken: refreshResponse.data.accessToken,
        refreshToken: refreshResponse.data.refreshToken,
      };

      store.setSession(session);
      resolveQueue(null, session.accessToken);
      originalRequest.headers = originalRequest.headers || {};
      originalRequest.headers.Authorization = `Bearer ${session.accessToken}`;
      return apiClient(originalRequest);
    } catch (refreshError) {
      resolveQueue(refreshError, null);
      store.clearSession();
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);
