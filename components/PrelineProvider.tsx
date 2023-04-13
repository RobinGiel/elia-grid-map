"use client";
import { useEffect } from "react";

export default function PrelineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("preline");
  }, []);

  return <>{children}</>;
}
