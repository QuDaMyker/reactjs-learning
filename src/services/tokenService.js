const STORAGE_KEY = 'react-learning-session';

export const tokenService = {
  getSession() {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  },
  saveSession(session) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  },
  clearSession() {
    window.localStorage.removeItem(STORAGE_KEY);
  },
};
