import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const supabaseClient = () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });

export default supabaseClient;
