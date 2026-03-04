import { NextResponse } from "next/server";

import { getDashboardData } from "@/lib/backend/repository";
import { requireAuth } from "@/lib/backend/require-auth";

export async function GET(req: Request) {
  const auth = requireAuth(req);
  if (auth.error) {
    return auth.error;
  }

  try {
    return NextResponse.json({
      data: await getDashboardData(),
      fetchedAt: new Date().toISOString(),
      user: auth.user,
    });
  } catch {
    return NextResponse.json(
      { message: "Data dashboard belum tersedia." },
      { status: 500 },
    );
  }
}
