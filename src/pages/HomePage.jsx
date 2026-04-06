import { Link } from 'react-router-dom';

import { AppButton } from '../shared/components/AppButton';
import { AppCard } from '../shared/components/AppCard';
import { learningSteps } from '../shared/data/learningSteps';

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero">
        <div>
          <p className="eyebrow">Beginner to Senior</p>
          <h2>Build one React app that teaches the full journey.</h2>
          <p className="hero-copy">
            This project is intentionally structured so each folder, page, and flow shows a
            real concept from the roadmap.
          </p>
        </div>

        <div className="hero-actions">
          <Link to="/learning">
            <AppButton>Open step by step guide</AppButton>
          </Link>
          <Link to="/playground">
            <AppButton variant="secondary">Open playground</AppButton>
          </Link>
        </div>
      </section>

      <div className="grid two-columns">
        <AppCard title="What you will practice" description="Use the app as a working reference.">
          <ol className="ordered-list">
            {learningSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </AppCard>

        <AppCard
          title="How to learn here"
          description="Read, run, change, and commit one session at a time."
        >
          <ul className="plain-list">
            <li>Start with simple UI changes in shared components.</li>
            <li>Move into routing and feature pages.</li>
            <li>Then connect state, APIs, auth, testing, and deployment.</li>
            <li>Use the protected Products page to test refresh-token behavior.</li>
          </ul>
        </AppCard>
      </div>
    </div>
  );
}
