import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("summaries").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Supabase fetch error:", error.message);
    return NextResponse.json([], { status: 500 });
  }

  return NextResponse.json(data);
}
