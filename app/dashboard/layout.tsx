import { PrelineProvider } from "@components/index";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrelineProvider>
      <body className="bg-gray-50 dark:bg-slate-900">{children}</body>
    </PrelineProvider>
  );
}
