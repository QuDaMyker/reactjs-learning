import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuthStore } from '../stores/authStore';

export function ProtectedRoute() {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  if (!isHydrated) {
    return <div className="card">Loading session...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
