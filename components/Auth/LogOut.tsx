"use client";

import { useSupabase } from "../SupabaseProvider";

export default function LogOut() {
  const { supabase } = useSupabase();
  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}
