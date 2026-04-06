import { AppCard } from '../shared/components/AppCard';

const buildSteps = [
  {
    title: '1. Install dependencies',
    content:
      'Run npm install after cloning the repo to download React, Vite, Router, Zustand, React Query, and test tools.',
  },
  {
    title: '2. Start the app',
    content:
      'Use npm run dev and open the URL from Vite. The shell, routes, and shared components load first.',
  },
  {
    title: '3. Explore public pages',
    content:
      'Read Home, Step by Step, and Playground to understand layout, components, and local state.',
  },
  {
    title: '4. Login with the demo account',
    content:
      'Use student@react-learning.dev and 123456 to create a session in localStorage through the auth store.',
  },
  {
    title: '5. Open the protected products page',
    content:
      'This page uses React Query, a feature module, and a ViewModel hook to request data.',
  },
  {
    title: '6. Expire the access token',
    content:
      'Click the expire button and refetch. The Axios interceptor will refresh once, then retry the request.',
  },
];

export function ProjectStepsPage() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Build Walkthrough</p>
        <h2>How to apply the document inside this project</h2>
        <p className="muted">
          Follow these steps if you want to learn the repo by doing, not only by reading.
        </p>
      </header>

      <div className="grid">
        {buildSteps.map((step) => (
          <AppCard key={step.title} title={step.title}>
            <p className="muted">{step.content}</p>
          </AppCard>
        ))}
      </div>
    </div>
  );
}
