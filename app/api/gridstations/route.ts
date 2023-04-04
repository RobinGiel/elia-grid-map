import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

import type { Database } from "@/types/supabase";

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data, error } = await supabase.from("gridstations").select("*");
  return NextResponse.json({ data, error });
}

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data, error } = await supabase.from("gridstations").insert(req.body);
  return NextResponse.json({ data, error });
}

export async function PUT(req: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data, error } = await supabase.from("gridstations").update(req.body);
  return NextResponse.json({ data, error });
}
