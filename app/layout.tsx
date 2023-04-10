import "./globals.css";
import { Roboto } from "next/font/google";
import { ToastProvider, SupabaseProvider } from "@components/index";

export const revalidate = 0;

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
    <>
      <html lang="en" className={`${roboto.className} h-full`}>
        <body>
          <ToastProvider>
            <SupabaseProvider>{children}</SupabaseProvider>
          </ToastProvider>
        </body>
      </html>
    </>
  );
}
