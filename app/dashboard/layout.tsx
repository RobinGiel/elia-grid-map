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
        <OlMapProvider>{children}</OlMapProvider>
      </PrelineProvider>
    </SupabaseProvider>
  );
}
