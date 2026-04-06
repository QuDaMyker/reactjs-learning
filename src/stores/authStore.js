import { create } from 'zustand';

import { tokenService } from '../services/tokenService';

export const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isHydrated: false,
  setSession(session) {
    tokenService.saveSession(session);
    set({
      user: session.user,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      isHydrated: true,
    });
  },
  clearSession() {
    tokenService.clearSession();
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isHydrated: true,
    });
  },
  hydrate() {
    const session = tokenService.getSession();

    if (!session) {
      set({ isHydrated: true });
      return;
    }

    set({
      user: session.user,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      isHydrated: true,
    });
  },
  expireAccessToken() {
    set((state) => {
      if (!state.user || !state.refreshToken) {
        return state;
      }

      const session = {
        user: state.user,
        accessToken: 'access-expired',
        refreshToken: state.refreshToken,
      };

      tokenService.saveSession(session);
      return session;
    });
  },
}));
