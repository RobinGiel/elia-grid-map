import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { headers, cookies } from "next/headers";

import type { Database } from "@lib/database.types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { gridstation } = await req.json();
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data, error } = await supabase
    .from("gridstations")
    .insert(gridstation);
  return NextResponse.json({ data, error });
}

export async function PUT(req: Request) {
  const { gridstation } = await req.json();
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data, error } = await supabase
    .from("gridstations")
    .update(gridstation)
    .match({ id: gridstation.id });
  return NextResponse.json({ data, error });
}
