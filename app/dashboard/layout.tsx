import {
  OlMapProvider,
  PrelineProvider,
  SupabaseProvider,
} from "@components/index";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SupabaseProvider>
      <PrelineProvider>
        <OlMapProvider>
          <body className="bg-gray-50 dark:bg-slate-900">{children}</body>
        </OlMapProvider>
      </PrelineProvider>
    </SupabaseProvider>
  );
}
