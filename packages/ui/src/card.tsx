export function Card({
  className,
  title,
  children,
  href,
}: {
   readonly className?: string;
   readonly title: string;
   readonly children: React.ReactNode;
   readonly href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-mekusmekus</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
