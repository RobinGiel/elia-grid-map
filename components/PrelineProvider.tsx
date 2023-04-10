"use client";

import dynamic from "next/dynamic";
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
