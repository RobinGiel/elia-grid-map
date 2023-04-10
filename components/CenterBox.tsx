"use client";

export default function CenterBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body className="flex h-full items-center py-16">
        <main className="w-full max-w-md mx-auto p-6">{children}</main>
      </body>
    </>
  );
}
