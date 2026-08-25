export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="theme-tech min-h-full flex-1 bg-surface">{children}</div>;
}
