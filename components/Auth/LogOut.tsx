"use client";

import { useSupabase } from "../SupabaseProvider";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}
