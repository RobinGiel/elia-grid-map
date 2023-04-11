import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { headers, cookies } from "next/headers";

import type { Database } from "@lib/database.types";

export async function GET(_req: NextApiRequest, res: NextApiResponse) {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data, error } = await supabase.from("gridstations").select("*");
  return res.json({ data, error });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data, error } = await supabase.from("gridstations").insert(req.body);
  return res.json({ data, error });
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data, error } = await supabase
    .from("gridstations")
    .update(req.body)
    .match({ id: req.body.id });
  return res.json({ data, error });
}
