"use client";

import { useSupabase } from "@components/index";
import { useRouter } from "next/navigation";

export default function LogOut({ children }: { children: React.ReactNode }) {
  const { supabase } = useSupabase();
  const router = useRouter();
  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <>
      <div onClick={signOut}>{children}</div>
    </>
  );
}
