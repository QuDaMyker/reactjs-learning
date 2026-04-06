import { Link } from 'react-router-dom';

import { AppButton } from '../shared/components/AppButton';
import { AppCard } from '../shared/components/AppCard';

export function NotFoundPage() {
  return (
    <div className="page-stack">
      <AppCard title="Page not found" description="The route does not exist in this learning app.">
        <Link to="/">
          <AppButton>Back to home</AppButton>
        </Link>
      </AppCard>
    </div>
  );
}
