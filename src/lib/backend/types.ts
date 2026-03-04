export type TahapProyek = {
  nama: string;
  progres: number;
  status: string;
};

export type BerkasAnggaran = {
  id: string;
  nama: string;
  tipe: string;
  ukuran: string;
  dibuatPada: string;
};

export type RekomendasiVendor = {
  nama: string;
  skor: string;
  alasan: string;
};

export type DashboardData = {
  totalAnggaranAktif: number;
  terpakaiPersen: number;
  variansiPersen: number;
  estimasiSelesai: string;
  keyakinanAi: number;
  analisis: string[];
  pemakaianKategori: {
    struktur: number;
    mep: number;
    interior: number;
  };
  tahapan: TahapProyek[];
  antreanBerkas: BerkasAnggaran[];
  rekomendasiVendor: RekomendasiVendor[];
};

export type LoginUser = {
  id: string;
  nama: string;
  email: string;
  role: "owner" | "manager";
};
