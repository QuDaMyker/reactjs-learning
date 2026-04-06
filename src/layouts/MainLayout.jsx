import { NavLink, Outlet } from 'react-router-dom';

import { AppCard } from '../shared/components/AppCard';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/learning', label: 'Step by Step' },
  { to: '/playground', label: 'Playground' },
  { to: '/login', label: 'Login' },
];

export function MainLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">React Journey</p>
          <h1>React Learning App</h1>
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
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
