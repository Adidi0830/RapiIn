"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type RoleUser = "konsumen" | "kontraktor";

type SessionUser = {
  id: string;
  nama: string;
  role: RoleUser;
};

type DataProyek = {
  id: string;
  nama: string;
  lokasi: string;
  progres: number;
  target: string;
  status: "berjalan" | "selesai";
  konsumenId: string;
  konsumenNama: string;
  kontraktorId: string;
  kontraktorNama: string;
  foto: string;
  galeri: {
    tahap: string;
    keterangan: string;
    foto: string;
  }[];
};

function IconRumah(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M6.5 10.5V20h11v-9.5" />
    </svg>
  );
}

function IconProgres(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M7.5 14 10.5 11l2.2 2.2L16.5 9.5" />
    </svg>
  );
}

function IconUang(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M6.5 9h.01M17.5 15h.01" />
    </svg>
  );
}

function IconProfil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

const semuaProyek: DataProyek[] = [
  {
    id: "p-001",
    nama: "Renovasi Ruko Cempaka",
    lokasi: "Jakarta Pusat",
    progres: 68,
    target: "Target selesai: 28 Apr 2026",
    status: "berjalan",
    konsumenId: "u-konsumen-1",
    konsumenNama: "Ariel",
    kontraktorId: "u-kontraktor-1",
    kontraktorNama: "CV Atlas Konstruksi",
    foto: "/images/proyek-lapangan-1.svg",
    galeri: [
      {
        tahap: "Sebelum Renovasi",
        keterangan: "Kondisi awal bangunan sebelum pembongkaran.",
        foto: "/images/proyek-lapangan-2.svg",
      },
      {
        tahap: "Sedang Dikerjakan",
        keterangan: "Pekerjaan struktur dan utilitas berjalan.",
        foto: "/images/proyek-lapangan-3.svg",
      },
      {
        tahap: "Mendekati Selesai",
        keterangan: "Finishing interior dan quality check.",
        foto: "/images/proyek-lapangan-4.svg",
      },
    ],
  },
  {
    id: "p-002",
    nama: "Fit-out Kantor Teknologi",
    lokasi: "Bandung",
    progres: 47,
    target: "Target selesai: 18 Mei 2026",
    status: "berjalan",
    konsumenId: "u-konsumen-2",
    konsumenNama: "Budi",
    kontraktorId: "u-kontraktor-1",
    kontraktorNama: "CV Atlas Konstruksi",
    foto: "/images/proyek-lapangan-2.svg",
    galeri: [
      {
        tahap: "Sebelum Renovasi",
        keterangan: "Layout awal kantor belum terstruktur.",
        foto: "/images/proyek-lapangan-1.svg",
      },
      {
        tahap: "Sedang Dikerjakan",
        keterangan: "Pemasangan partisi dan jalur kelistrikan.",
        foto: "/images/proyek-lapangan-5.svg",
      },
      {
        tahap: "Mendekati Selesai",
        keterangan: "Penyesuaian interior dan furniture.",
        foto: "/images/proyek-lapangan-6.svg",
      },
    ],
  },
  {
    id: "p-003",
    nama: "Revamp Cafe Kota Tua",
    lokasi: "Jakarta Barat",
    progres: 100,
    target: "Selesai: 11 Feb 2026",
    status: "selesai",
    konsumenId: "u-konsumen-1",
    konsumenNama: "Ariel",
    kontraktorId: "u-kontraktor-1",
    kontraktorNama: "CV Atlas Konstruksi",
    foto: "/images/proyek-lapangan-3.svg",
    galeri: [
      {
        tahap: "Sebelum Renovasi",
        keterangan: "Area service belum optimal.",
        foto: "/images/proyek-lapangan-2.svg",
      },
      {
        tahap: "Sedang Dikerjakan",
        keterangan: "Pekerjaan interior dan bar station.",
        foto: "/images/proyek-lapangan-4.svg",
      },
      {
        tahap: "Hasil Akhir",
        keterangan: "Cafe siap operasional dengan layout baru.",
        foto: "/images/proyek-lapangan-6.svg",
      },
    ],
  },
];

export default function HalamanProyek() {
  const [sessionUser] = useState<SessionUser | null>(() => {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem("rapiin_session_user");
    if (!raw) return null;
    try {
      return JSON.parse(raw) as SessionUser;
    } catch {
      return null;
    }
  });

  const proyekUser = useMemo(() => {
    if (!sessionUser) return semuaProyek;
    if (sessionUser.role === "konsumen") {
      return semuaProyek.filter((p) => p.konsumenId === sessionUser.id);
    }
    return semuaProyek.filter((p) => p.kontraktorId === sessionUser.id);
  }, [sessionUser]);

  const proyekBerjalan = proyekUser.filter((p) => p.status === "berjalan");
  const proyekSelesai = proyekUser.filter((p) => p.status === "selesai");
  const galeriGabungan = proyekUser.flatMap((p) =>
    p.galeri.map((g) => ({ ...g, proyek: p.nama })),
  );
  const roleAktif: RoleUser = sessionUser?.role ?? "konsumen";
  const isKonsumen = roleAktif === "konsumen";

  return (
    <main className="app-shell app-main min-h-screen px-4 py-6">
      <section className="w-full">
        <header className="rounded-3xl border border-[#d4d4d4] bg-white px-5 py-4 soft-shadow">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-[#111111]">RAPIIN</p>
              <h1 className="mt-1 text-2xl font-semibold">Halaman Proyek</h1>
              <p className="mt-1 text-sm text-[--muted]">
                {isKonsumen
                  ? "Mode Konsumen: pantau progres proyek milikmu yang dikerjakan kontraktor."
                  : "Mode Kontraktor: kelola proyek klien yang sedang kamu kerjakan."}
              </p>
            </div>
            <Link
              href="/proyek"
              className="rounded-full border border-[#d4d4d4] bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#111111]"
            >
              Halaman Ini
            </Link>
          </div>
        </header>

        {sessionUser ? (
          <section className="mt-4 rounded-2xl border border-[#d4d4d4] bg-[#f4f4f4] px-4 py-3 text-sm">
            <p className="font-medium text-[#111111]">
              User aktif: {sessionUser.nama}
            </p>
            <p className="text-[--muted]">
              Role:{" "}
              {sessionUser.role === "konsumen"
                ? "Konsumen (pemilik proyek)"
                : "Kontraktor (pelaksana proyek)"}
            </p>
          </section>
        ) : null}

        {isKonsumen ? (
          <section className="mt-5 rounded-3xl border border-[#d4d4d4] bg-white p-4 soft-shadow">
            <h2 className="text-lg font-semibold">Proyek Sedang Dikerjakan</h2>
            <div className="mt-4 grid gap-4">
              {proyekBerjalan.map((item) => (
                <article key={item.id} className="rounded-2xl bg-[#f4f4f4] p-3">
                  <Image
                    src={item.foto}
                    alt={item.nama}
                    width={1200}
                    height={800}
                    className="h-44 w-full rounded-xl object-cover"
                  />
                  <h3 className="mt-3 font-semibold">{item.nama}</h3>
                  <p className="text-sm text-[--muted]">{item.lokasi}</p>
                  <p className="mt-1 text-xs text-[--muted]">
                    Kontraktor:{" "}
                    <span className="font-medium">{item.kontraktorNama}</span>
                  </p>
                  <div className="mt-3 h-2 rounded-full bg-[#dbdbdb]">
                    <div
                      className="h-2 rounded-full bg-[#111111]"
                      style={{ width: `${item.progres}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-[--muted]">
                    <p>{item.progres}% selesai</p>
                    <p>{item.target}</p>
                  </div>
                </article>
              ))}
              {proyekBerjalan.length === 0 ? (
                <p className="text-sm text-[--muted]">Tidak ada proyek berjalan.</p>
              ) : null}
            </div>
          </section>
        ) : (
          <section className="mt-5 rounded-3xl border border-[#d4d4d4] bg-white p-4 soft-shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Pekerjaan Aktif Kontraktor</h2>
              <span className="rounded-full bg-[#111111] px-2 py-1 text-xs text-white">
                {proyekBerjalan.length} aktif
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {proyekBerjalan.map((item) => (
                <article key={item.id} className="rounded-2xl bg-[#f4f4f4] p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{item.nama}</h3>
                      <p className="text-xs text-[--muted]">
                        Klien: {item.konsumenNama} • {item.lokasi}
                      </p>
                    </div>
                    <button className="rounded-full border border-[#bdbdbd] bg-white px-3 py-1 text-xs font-medium text-[#111111]">
                      Update Progres
                    </button>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-[#dbdbdb]">
                    <div
                      className="h-2 rounded-full bg-[#111111]"
                      style={{ width: `${item.progres}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-[--muted]">
                    <p>Progress lapangan: {item.progres}%</p>
                    <p>{item.target}</p>
                  </div>
                </article>
              ))}
              {proyekBerjalan.length === 0 ? (
                <p className="text-sm text-[--muted]">Tidak ada proyek aktif.</p>
              ) : null}
            </div>
          </section>
        )}

        <section className="mt-5 rounded-3xl border border-[#d4d4d4] bg-white p-4 soft-shadow">
          <h2 className="text-lg font-semibold">
            {isKonsumen ? "Riwayat Proyek Selesai" : "Arsip Pekerjaan Selesai"}
          </h2>
          <div className="mt-4 grid gap-4">
            {proyekSelesai.map((item) => (
              <article key={item.id} className="rounded-2xl bg-[#f4f4f4] p-3">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  width={1200}
                  height={800}
                  className="h-44 w-full rounded-xl object-cover"
                />
                <h3 className="mt-3 font-semibold">{item.nama}</h3>
                <p className="text-sm text-[--muted]">{item.lokasi}</p>
                {isKonsumen ? (
                  <p className="text-xs text-[--muted]">
                    Kontraktor:{" "}
                    <span className="font-medium">{item.kontraktorNama}</span>
                  </p>
                ) : (
                  <p className="text-xs text-[--muted]">
                    Klien: <span className="font-medium">{item.konsumenNama}</span>
                  </p>
                )}
                <p className="mt-1 text-sm text-[--muted]">{item.target}</p>
              </article>
            ))}
            {proyekSelesai.length === 0 ? (
              <p className="text-sm text-[--muted]">Belum ada proyek selesai.</p>
            ) : null}
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-[#d4d4d4] bg-white p-4 soft-shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Galeri Foto Progres</h2>
            {!isKonsumen ? (
              <button className="rounded-full border border-[#bdbdbd] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#111111]">
                Upload Foto
              </button>
            ) : null}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {galeriGabungan.map((item, idx) => (
              <article key={`${item.proyek}-${item.tahap}-${idx}`} className="rounded-2xl bg-[#f4f4f4] p-3">
                <Image
                  src={item.foto}
                  alt={`${item.proyek} - ${item.tahap}`}
                  width={1200}
                  height={800}
                  className="h-28 w-full rounded-xl object-cover"
                />
                <h3 className="mt-2 text-sm font-semibold">{item.tahap}</h3>
                <p className="text-xs text-[--muted]">{item.proyek}</p>
                <p className="text-xs text-[--muted]">{item.keterangan}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="mt-4 text-xs text-[--muted]">
          {isKonsumen
            ? "Mode Konsumen: fokus di monitoring progres dan hasil pekerjaan."
            : "Mode Kontraktor: fokus di pekerjaan aktif, update progres, dan upload dokumentasi."}
        </p>

        <nav className="bottom-nav-safe fixed bottom-0 left-1/2 z-20 w-full max-w-[430px] -translate-x-1/2 border-t border-[#d4d4d4] bg-white/92 px-6 pt-3 backdrop-blur-xl">
          <ul className="grid grid-cols-4 gap-2 text-center text-[11px]">
            <li>
              <Link
                href="/"
                className="flex w-full flex-col items-center gap-1 text-[#6b7280]"
              >
                <IconRumah className="h-4 w-4 stroke-[#6b7280]" />
                Beranda
              </Link>
            </li>
            <li>
              <span className="flex w-full flex-col items-center gap-1 font-semibold text-[#111111]">
                <IconProgres className="h-4 w-4 stroke-[#111111]" />
                Proyek
              </span>
            </li>
            <li>
              <Link
                href="/budget"
                className="flex w-full flex-col items-center gap-1 text-[#6b7280]"
              >
                <IconUang className="h-4 w-4 stroke-[#6b7280]" />
                Budget
              </Link>
            </li>
            <li>
              <Link
                href="/profil"
                className="flex w-full flex-col items-center gap-1 text-[#6b7280]"
              >
                <IconProfil className="h-4 w-4 stroke-[#6b7280]" />
                Profil
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
