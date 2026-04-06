import { NavLink, Outlet } from 'react-router-dom';

import { env } from '../config/env';
import { AppCard } from '../shared/components/AppCard';
import { useAuthStore } from '../stores/authStore';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/learning', label: 'Step by Step' },
  { to: '/build-steps', label: 'Build Steps' },
  { to: '/playground', label: 'Playground' },
  { to: '/products', label: 'Products' },
  { to: '/login', label: 'Login' },
];

export function MainLayout() {
  const user = useAuthStore((state) => state.user);
  const clearSession = useAuthStore((state) => state.clearSession);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">React Journey</p>
          <h1>{env.appName}</h1>
          <p className="muted">
            A learning project that grows from beginner setup into scalable patterns.
          </p>
        </div>

        <nav className="nav-list" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <AppCard title="What this app covers">
          <ul className="plain-list">
            <li>Project setup and local run flow</li>
            <li>Reusable components and routing</li>
            <li>State, API, auth, tests, and performance</li>
          </ul>
        </AppCard>

        <AppCard title="Current session">
          <ul className="plain-list">
            <li>User: {user?.name || 'Guest'}</li>
            <li>Status: {user ? 'Authenticated' : 'Anonymous'}</li>
          </ul>
          {user ? (
            <div className="card-actions">
              <button type="button" className="button secondary block" onClick={clearSession}>
                Logout
              </button>
            </div>
          ) : null}
        </AppCard>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
