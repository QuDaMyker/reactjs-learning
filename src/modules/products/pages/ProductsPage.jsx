import { AppButton } from '../../../shared/components/AppButton';
import { AppCard } from '../../../shared/components/AppCard';
import { useAuthStore } from '../../../stores/authStore';
import { useProductsViewModel } from '../view-models/useProductsViewModel';

export function ProductsPage() {
  const expireAccessToken = useAuthStore((state) => state.expireAccessToken);
  const { items, total, isLoading, isError, errorMessage, refetch } = useProductsViewModel();

  return (
    <div className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Protected Feature</p>
        <h2>Products module using MVVM and server state</h2>
        <p className="muted">
          This screen is protected, data-driven, and connected to token refresh behavior.
        </p>
      </header>

      <div className="grid two-columns">
        <AppCard title="Try auth edge cases" description="These actions simulate production flows.">
          <div className="stack">
            <AppButton onClick={() => refetch()}>Refetch products</AppButton>
            <AppButton variant="secondary" onClick={() => expireAccessToken()}>
              Expire access token
            </AppButton>
          </div>
        </AppCard>

        <AppCard title="ViewModel summary" description="The page consumes already-shaped data.">
          <ul className="plain-list">
            <li>Total items: {total}</li>
            <li>Loading state: {String(isLoading)}</li>
            <li>Error state: {String(isError)}</li>
          </ul>
        </AppCard>
      </div>

      {isLoading ? (
        <AppCard title="Loading products">
          <p className="muted">Please wait while server state is being fetched.</p>
        </AppCard>
      ) : null}

      {isError ? (
        <AppCard title="Request failed" description={errorMessage}>
          <p className="muted">
            If the token is expired, the Axios interceptor tries one refresh before forcing login.
          </p>
        </AppCard>
      ) : null}

      {!isLoading && !isError ? (
        <div className="grid two-columns">
          {items.map((product) => (
            <AppCard key={product.id} title={product.name} description={product.description}>
              <ul className="plain-list">
                <li>Category: {product.category}</li>
                <li>Price: {product.priceLabel}</li>
                <li>Status: {product.statusLabel}</li>
              </ul>
            </AppCard>
          ))}
        </div>
      ) : null}
    </div>
  );
}
