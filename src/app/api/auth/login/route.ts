import { NextResponse } from "next/server";
import { z } from "zod";

import { signAccessToken } from "@/lib/backend/auth";
import { validateLogin } from "@/lib/backend/repository";

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Body JSON tidak valid." },
      { status: 400 },
    );
  }

  const parsed = z
    .object({
      email: z.string().email(),
      password: z.string().min(1),
    })
    .safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Email dan password wajib diisi." },
      { status: 400 },
    );
  }

  const user = await validateLogin(parsed.data.email.trim(), parsed.data.password);
  if (!user) {
    return NextResponse.json(
      { message: "Kredensial tidak valid." },
      { status: 401 },
    );
  }

  const token = signAccessToken({
    sub: user.id,
    email: user.email,
    nama: user.nama,
    role: user.role,
  });

  return NextResponse.json({
    token,
    user,
  });
}
