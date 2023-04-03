"use client";
import { useSupabase } from "@/app/supabase-provider";

export default function Login() {
  const { supabase } = useSupabase();

  const signUp = () => {
    supabase.auth.signUp({
      email: "test@testemail.com",
      password: "sup3ers3cur3",
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "test@testemail.com",
      password: "sup3ers3cur3",
    });
  };
  return <div>LOGIN</div>;
}
