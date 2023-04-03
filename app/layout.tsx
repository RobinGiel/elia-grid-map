import "./globals.css";
import { Roboto } from "next/font/google";
import SupabaseProvider from "./supabase-provider";

export const metadata = {
  title: "50hertz Grid Planner",
  description: "Plan your grid",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
