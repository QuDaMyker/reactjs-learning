import { apiClient } from './client';

export async function loginApi(payload) {
  const response = await apiClient.post('/auth/login', payload);
  return response.data;
}
