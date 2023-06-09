import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { Database } from "@lib/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session && pathname === "/dashboard") {
    const url = new URL(req.url);
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (session && pathname === "/") {
    const url = new URL(req.url);
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return res;
}
