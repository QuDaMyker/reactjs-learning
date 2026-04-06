import { AppCard } from '../shared/components/AppCard';
import { learningSteps } from '../shared/data/learningSteps';

export function LearningPage() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Step by Step</p>
        <h2>Implementation order for this project</h2>
        <p className="muted">
          Follow this order if you want to rebuild the app by yourself from scratch.
        </p>
      </header>

      <div className="grid">
        {learningSteps.map((step, index) => (
          <AppCard key={step} title={`Step ${index + 1}`} description={step}>
            <p className="muted">
              Build the smallest working version first, then refactor when the feature becomes
              clear.
            </p>
          </AppCard>
        ))}
      </div>
    </div>
  );
}
