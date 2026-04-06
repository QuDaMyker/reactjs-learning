export function AppButton({
  children,
  type = 'button',
  variant = 'primary',
  isBlock = false,
  ...props
}) {
  const className = `button ${variant}${isBlock ? ' block' : ''}`;

  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
}
