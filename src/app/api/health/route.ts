import { NextResponse } from "next/server";
import { getDb } from "@/lib/backend/db";

export async function GET() {
  try {
    await getDb();
    return NextResponse.json({
      ok: true,
      service: "rapiin-api",
      database: "connected",
      waktu: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        service: "rapiin-api",
        database: "disconnected",
        waktu: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
