export function AppCard({ title, description, children, actions }) {
  return (
    <section className="card">
      {(title || description) && (
        <header className="card-header">
          {title ? <h2>{title}</h2> : null}
          {description ? <p className="muted">{description}</p> : null}
        </header>
      )}

      <div className="card-body">{children}</div>

      {actions ? <footer className="card-actions">{actions}</footer> : null}
    </section>
  );
}
