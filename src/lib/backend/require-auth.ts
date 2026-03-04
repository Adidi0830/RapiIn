import { NextResponse } from "next/server";

import { readBearerToken, verifyAccessToken } from "./auth";

export function requireAuth(req: Request) {
  const token = readBearerToken(req);
  if (!token) {
    return {
      error: NextResponse.json(
        { message: "Token tidak ditemukan." },
        { status: 401 },
      ),
      user: null,
    };
  }

  const user = verifyAccessToken(token);
  if (!user) {
    return {
      error: NextResponse.json(
        { message: "Token tidak valid atau expired." },
        { status: 401 },
      ),
      user: null,
    };
  }

  return {
    error: null,
    user,
  };
}
