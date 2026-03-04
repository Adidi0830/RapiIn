import { compare } from "bcryptjs";

import { getDb } from "./db";
import type { BerkasAnggaran, DashboardData, LoginUser } from "./types";

export async function validateLogin(email: string, password: string) {
  const db = await getDb();
  const user = db.data.users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase(),
  );

  if (!user) {
    return null;
  }

  const passwordValid = await compare(password, user.passwordHash);
  if (!passwordValid) {
    return null;
  }

  const sanitizedUser: LoginUser = {
    id: user.id,
    nama: user.nama,
    email: user.email,
    role: user.role as LoginUser["role"],
  };

  return sanitizedUser;
}

export async function getDashboardData(): Promise<DashboardData> {
  const db = await getDb();
  return db.data.dashboard;
}

export async function listBerkas(): Promise<BerkasAnggaran[]> {
  const db = await getDb();
  return db.data.dashboard.antreanBerkas;
}

export async function addBerkas(input: {
  nama: string;
  tipe: string;
  ukuran: string;
}) {
  const db = await getDb();
  const berkasBaru: BerkasAnggaran = {
    id: `f${Date.now()}`,
    nama: input.nama,
    tipe: input.tipe,
    ukuran: input.ukuran,
    dibuatPada: new Date().toISOString(),
  };

  db.data.dashboard.antreanBerkas.unshift(berkasBaru);
  await db.write();

  return berkasBaru;
}
