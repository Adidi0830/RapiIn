import { JSONFilePreset } from "lowdb/node";

import type { DashboardData } from "./types";

export type DbRole = "owner" | "manager";

export type DbUser = {
  id: string;
  email: string;
  nama: string;
  passwordHash: string;
  role: DbRole;
};

export type DbSchema = {
  users: DbUser[];
  dashboard: DashboardData;
};

let dbPromise: Promise<Awaited<ReturnType<typeof JSONFilePreset<DbSchema>>>> | null =
  null;

export function getDb() {
  if (!dbPromise) {
    dbPromise = JSONFilePreset<DbSchema>("data/db.json", {
      users: [],
      dashboard: {
        totalAnggaranAktif: 0,
        terpakaiPersen: 0,
        variansiPersen: 0,
        estimasiSelesai: "",
        keyakinanAi: 0,
        analisis: [],
        pemakaianKategori: {
          struktur: 0,
          mep: 0,
          interior: 0,
        },
        tahapan: [],
        antreanBerkas: [],
        rekomendasiVendor: [],
      },
    });
  }

  return dbPromise;
}
