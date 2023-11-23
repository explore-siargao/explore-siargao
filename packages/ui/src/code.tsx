export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  readonly className?: string;
}): JSX.Element {
  return <code className={className}>{children}</code>;
}
