import { AppCard } from '../shared/components/AppCard';

export function LoginPage() {
  return (
    <div className="page-stack">
      <AppCard
        title="Login page"
        description="This page will be connected to the auth flow in the next session."
      >
        <p className="muted">
          We keep the route ready early so authentication and protected navigation are easier to
          add later.
        </p>
      </AppCard>
    </div>
  );
}
