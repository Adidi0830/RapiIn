import { NextResponse } from "next/server";
import { z } from "zod";

import { addBerkas, listBerkas } from "@/lib/backend/repository";
import { requireAuth } from "@/lib/backend/require-auth";

export async function GET(req: Request) {
  const auth = requireAuth(req);
  if (auth.error) {
    return auth.error;
  }

  return NextResponse.json({
    data: await listBerkas(),
  });
}

export async function POST(req: Request) {
  const auth = requireAuth(req);
  if (auth.error) {
    return auth.error;
  }

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
      nama: z.string().min(1),
      tipe: z.string().min(1),
      ukuran: z.string().min(1),
    })
    .safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Field nama, tipe, dan ukuran wajib diisi." },
      { status: 400 },
    );
  }

  const berkas = await addBerkas({
    nama: parsed.data.nama.trim(),
    tipe: parsed.data.tipe.trim(),
    ukuran: parsed.data.ukuran.trim(),
  });

  return NextResponse.json(
    {
      message: "Berkas berhasil ditambahkan.",
      data: berkas,
    },
    { status: 201 },
  );
}
