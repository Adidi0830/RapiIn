"use client";

import Image from "next/image";
import type { FormEvent, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";

import type { DashboardData } from "@/lib/backend/types";

type IconProps = SVGProps<SVGSVGElement>;

function IconRumah(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M6.5 10.5V20h11v-9.5" />
    </svg>
  );
}

function IconProgres(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M7.5 14 10.5 11l2.2 2.2L16.5 9.5" />
    </svg>
  );
}

function IconKalkulasi(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M8 8h8M8 12h3M13 12h3M8 16h3M13 16h3" />
    </svg>
  );
}

function IconUnggah(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <path d="M12 15V6" />
      <path d="m8.5 9.5 3.5-3.5 3.5 3.5" />
      <path d="M5 16.5v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

function IconAI(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <path d="M12 3v3M12 18v3M4.5 7.5 7 10M17 14l2.5 2.5M3 12h3M18 12h3M4.5 16.5 7 14M17 10l2.5-2.5" />
      <circle cx="12" cy="12" r="4.2" />
    </svg>
  );
}

function IconUang(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M6.5 9h.01M17.5 15h.01" />
    </svg>
  );
}

function IconVendor(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <path d="M4 20V8l5-3 5 3v12" />
      <path d="M14 20V5l6 2.5V20" />
      <path d="M9 11h.01M9 15h.01M17 11h.01M17 15h.01" />
    </svg>
  );
}

function IconLonceng(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <path d="M6.5 16.5V11a5.5 5.5 0 1 1 11 0v5.5l1.5 1.5H5l1.5-1.5Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

function IconProfil(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

const ikonAksi = {
  progres: IconProgres,
  estimasi: IconKalkulasi,
  unggah: IconUnggah,
  ai: IconAI,
  anggaran: IconUang,
  kontraktor: IconVendor,
  laporan: IconKalkulasi,
  notifikasi: IconLonceng,
};

const defaultDashboardData: DashboardData = {
  totalAnggaranAktif: 1240000,
  terpakaiPersen: 58,
  variansiPersen: -3.6,
  estimasiSelesai: "8 - 16 Nov 2026",
  keyakinanAi: 84,
  analisis: [
    "Harga baja melampaui benchmark sebesar 11,4%",
    "Potensi penghematan konsolidasi vendor: $21.800",
  ],
  pemakaianKategori: {
    struktur: 68,
    mep: 52,
    interior: 34,
  },
  tahapan: [
    { nama: "Persiapan Lokasi", progres: 100, status: "Selesai" },
    { nama: "Pekerjaan Struktur", progres: 74, status: "Lancar" },
    { nama: "Instalasi MEP", progres: 48, status: "Perlu Tinjau" },
  ],
  antreanBerkas: [
    {
      id: "f1",
      nama: "RAB-Revisi-Q1.xlsx",
      tipe: "Spreadsheet",
      ukuran: "1.2 MB",
      dibuatPada: "2026-03-01T08:00:00.000Z",
    },
    {
      id: "f2",
      nama: "Penawaran-Vendor-Maret.pdf",
      tipe: "PDF",
      ukuran: "4.8 MB",
      dibuatPada: "2026-03-02T08:00:00.000Z",
    },
    {
      id: "f3",
      nama: "Pengadaan.csv",
      tipe: "CSV",
      ukuran: "740 KB",
      dibuatPada: "2026-03-03T08:00:00.000Z",
    },
  ],
  rekomendasiVendor: [
    {
      nama: "Atlas Concrete Works",
      skor: "92/100",
      alasan: "Variansi biaya paling rendah untuk proyek struktur",
    },
    {
      nama: "Nusa Interior Systems",
      skor: "89/100",
      alasan: "Kecepatan kerja baik dan catatan kepatuhan rapi",
    },
    {
      nama: "Prime MEP Partners",
      skor: "87/100",
      alasan: "Paling sesuai dengan kebutuhan lingkup MEP saat ini",
    },
  ],
};

type LoginResponse = {
  token: string;
  user: {
    id: string;
    nama: string;
    email: string;
    role: "owner" | "manager";
  };
};

function SplashScreen() {
  return (
    <main className="splash-bg relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute -left-14 top-24 h-40 w-40 rounded-full bg-white/8 blur-2xl" />
      <div className="pointer-events-none absolute -right-12 bottom-24 h-44 w-44 rounded-full bg-white/6 blur-2xl" />
      <section className="splash-pop text-center text-white">
        <div className="splash-logo-wrap relative mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-[32px] border border-white/20 bg-white/12 p-2.5 shadow-[0_16px_34px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <div className="splash-ring absolute -inset-2.5 rounded-[34px] border border-white/35" />
          <div className="splash-shine pointer-events-none absolute inset-0 rounded-[28px]" />
          <Image
            src="/RapiInLogo.jpeg"
            alt="Logo RapiIn"
            width={96}
            height={96}
            className="splash-logo h-full w-full rounded-[22px] object-contain bg-white p-1.5"
            priority
          />
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">RapiIn</h1>
        <p className="mt-1 text-sm text-white/80">Rapihin Proyek. Kunci Budget.</p>
        <div className="mt-5 flex items-center justify-center gap-1.5">
          <span className="splash-dot h-2 w-2 rounded-full bg-white/80" />
          <span
            className="splash-dot h-2 w-2 rounded-full bg-white/80"
            style={{ animationDelay: "140ms" }}
          />
          <span
            className="splash-dot h-2 w-2 rounded-full bg-white/80"
            style={{ animationDelay: "280ms" }}
          />
        </div>
      </section>
      <p className="absolute bottom-8 text-xs text-white/75">
        Powered by RapiIn
      </p>
    </main>
  );
}

function OnboardingScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const slides = [
    {
      judul: "Pantau Proyek Real-time",
      deskripsi:
        "Lihat progres renovasi bisnis kamu langsung dari satu dashboard.",
      gambar: "/images/ilustrasi-proyek.svg",
    },
    {
      judul: "Kontrol Budget Lebih Rapi",
      deskripsi:
        "Upload berkas anggaran multi-format dan pantau pemakaian tanpa ribet.",
      gambar: "/images/ilustrasi-upload.svg",
    },
    {
      judul: "Analisis AI & Rekomendasi",
      deskripsi:
        "Deteksi risiko overbudget lebih cepat dan dapatkan saran kontraktor.",
      gambar: "/images/ilustrasi-ai.svg",
    },
  ];

  const [index, setIndex] = useState(0);
  const isLast = index === slides.length - 1;
  const active = slides[index];

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-6">
      <section className="w-full max-w-md rounded-3xl bg-white p-5 soft-shadow">
        <div className="flex items-center justify-between">
          <p className="text-[10px] tracking-[0.28em] text-[#111111]">RAPIIN</p>
          <button
            onClick={onFinish}
            className="text-xs font-medium text-[#6b7280] transition hover:text-[#111111]"
          >
            Lewati
          </button>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-[#d4d4d4] bg-[#f0f0f0]">
          <Image
            src={active.gambar}
            alt={active.judul}
            width={900}
            height={360}
            className="h-48 w-full object-cover"
            priority
          />
        </div>

        <h1 className="mt-5 text-2xl font-semibold text-[#111111]">{active.judul}</h1>
        <p className="mt-2 text-sm leading-6 text-[--muted]">{active.deskripsi}</p>

        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[#111111]" : "w-2 bg-[#d4d4d4]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            if (isLast) {
              onFinish();
              return;
            }
            setIndex((v) => v + 1);
          }}
          className="mt-6 w-full rounded-xl bg-linear-to-r from-[#111111] to-[#2a2a2a] py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          {isLast ? "Mulai Sekarang" : "Lanjut"}
        </button>
      </section>
    </main>
  );
}

function LoginDummy({
  onLogin,
}: {
  onLogin: (payload: LoginResponse) => Promise<void>;
}) {
  const [email, setEmail] = useState("demo@rapiin.id");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Email dan kata sandi wajib diisi.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const failed = (await response.json()) as { message?: string };
        setError(failed.message ?? "Gagal login.");
        return;
      }

      const data = (await response.json()) as LoginResponse;
      await onLogin(data);
    } catch {
      setError("Server tidak bisa diakses.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-5 soft-shadow">
        <p className="text-[10px] tracking-[0.28em] text-[#111111]">RAPIIN</p>
        <h1 className="mt-2 text-2xl font-semibold text-[#111111]">Masuk Akun</h1>
        <p className="mt-1 text-sm text-[--muted]">
          Login sudah tersambung ke API backend lokal.
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl border border-[#d4d4d4]">
          <Image
            src="/images/ilustrasi-proyek.svg"
            alt="Ilustrasi login RapiIn"
            width={900}
            height={360}
            className="h-28 w-full object-cover"
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-[#111111]">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@rapiin.id"
              className="w-full rounded-xl border border-[#d4d4d4] bg-[#f5f5f5] px-3 py-2 text-sm outline-none ring-[#111111] focus:ring-2"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-[#111111]">
              Kata Sandi
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              className="w-full rounded-xl border border-[#d4d4d4] bg-[#f5f5f5] px-3 py-2 text-sm outline-none ring-[#111111] focus:ring-2"
            />
          </label>
          {error ? <p className="text-xs text-[#111111]">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-linear-to-r from-[#111111] to-[#2a2a2a] py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            {loading ? "Memproses..." : "Masuk ke RapiIn"}
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-[--muted]">
          Akun dummy: <span className="font-mono">demo@rapiin.id / 123456</span>
        </p>
      </section>
    </main>
  );
}

function Dashboard({
  nama,
  data,
  token,
  onLogout,
}: {
  nama: string;
  data: DashboardData;
  token: string;
  onLogout: () => void;
}) {
  const [dashboard, setDashboard] = useState(data);
  const [activeTab, setActiveTab] = useState<"beranda" | "proyek" | "budget" | "profil">(
    "beranda",
  );
  const [toast, setToast] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [namaBerkas, setNamaBerkas] = useState("");
  const [tipeBerkas, setTipeBerkas] = useState("PDF");
  const [ukuranBerkas, setUkuranBerkas] = useState("");

  const progresRef = useRef<HTMLElement | null>(null);
  const estimasiRef = useRef<HTMLElement | null>(null);
  const uploadRef = useRef<HTMLElement | null>(null);
  const aiRef = useRef<HTMLElement | null>(null);
  const budgetRef = useRef<HTMLElement | null>(null);
  const vendorRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setDashboard(data);
  }, [data]);

  useEffect(() => {
    if (!toast) {
      return;
    }
    const timer = window.setTimeout(() => setToast(""), 2500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function pindahKeSection(
    tab: "beranda" | "proyek" | "budget",
    ref: { current: HTMLElement | null },
  ) {
    setActiveTab(tab);
    window.setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  async function submitTambahBerkas(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!namaBerkas.trim() || !ukuranBerkas.trim()) {
      setToast("Nama dan ukuran berkas wajib diisi.");
      return;
    }

    if (!token) {
      setToast("Token login tidak ditemukan.");
      return;
    }

    setIsUploading(true);
    try {
      const response = await fetch("/api/berkas", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nama: namaBerkas,
          tipe: tipeBerkas,
          ukuran: ukuranBerkas,
        }),
      });

      const payload = (await response.json()) as {
        message?: string;
        data?: DashboardData["antreanBerkas"][number];
      };

      if (!response.ok || !payload.data) {
        setToast(payload.message ?? "Gagal tambah berkas.");
        return;
      }

      setDashboard((prev) => ({
        ...prev,
        antreanBerkas: [payload.data!, ...prev.antreanBerkas],
      }));
      setNamaBerkas("");
      setUkuranBerkas("");
      setShowUploadForm(false);
      setToast("Berkas berhasil ditambahkan.");
    } catch {
      setToast("Server tidak dapat dijangkau.");
    } finally {
      setIsUploading(false);
    }
  }

  function downloadLaporan() {
    const isi = [
      `Ringkasan RapiIn - ${new Date().toLocaleString("id-ID")}`,
      "",
      `Total Anggaran Aktif: $${dashboard.totalAnggaranAktif.toLocaleString("id-ID")}`,
      `Terpakai: ${dashboard.terpakaiPersen}%`,
      `Variansi: ${dashboard.variansiPersen}%`,
      "",
      "Tahapan Proyek:",
      ...dashboard.tahapan.map(
        (item) => `- ${item.nama}: ${item.progres}% (${item.status})`,
      ),
    ].join("\n");

    const blob = new Blob([isi], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `laporan-rapiin-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setToast("Laporan berhasil diunduh.");
  }

  function handleQuickAction(
    key:
      | "progres"
      | "estimasi"
      | "unggah"
      | "ai"
      | "anggaran"
      | "kontraktor"
      | "laporan"
      | "notifikasi",
  ) {
    if (key === "progres") {
      pindahKeSection("proyek", progresRef);
      return;
    }
    if (key === "estimasi") {
      pindahKeSection("proyek", estimasiRef);
      return;
    }
    if (key === "unggah") {
      setActiveTab("budget");
      setShowUploadForm(true);
      window.setTimeout(() => {
        uploadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return;
    }
    if (key === "ai") {
      pindahKeSection("budget", aiRef);
      return;
    }
    if (key === "anggaran") {
      pindahKeSection("budget", budgetRef);
      return;
    }
    if (key === "kontraktor") {
      pindahKeSection("proyek", vendorRef);
      return;
    }
    if (key === "laporan") {
      downloadLaporan();
      return;
    }

    const perluTinjau = dashboard.tahapan.filter((item) => item.status !== "Selesai").length;
    setToast(`Notifikasi aktif: ${perluTinjau} tahapan perlu dipantau.`);
  }

  const aksiCepat = [
    { label: "Progres", key: "progres" as const },
    { label: "Estimasi", key: "estimasi" as const },
    { label: "Unggah", key: "unggah" as const },
    { label: "Analisis AI", key: "ai" as const },
    { label: "Anggaran", key: "anggaran" as const },
    { label: "Kontraktor", key: "kontraktor" as const },
    { label: "Laporan", key: "laporan" as const },
    { label: "Notifikasi", key: "notifikasi" as const },
  ];

  const tampilProyek = activeTab === "beranda" || activeTab === "proyek";
  const tampilBudget = activeTab === "beranda" || activeTab === "budget";
  const tampilProfil = activeTab === "profil";

  return (
    <main className="relative min-h-screen pb-24 pt-4 md:pt-8">
      {toast ? (
        <div className="fixed inset-x-0 top-3 z-50 mx-auto w-fit rounded-full bg-[#111111] px-4 py-2 text-xs text-white">
          {toast}
        </div>
      ) : null}
      <section className="mx-auto w-full max-w-md px-4">
        <header className="reveal rounded-[34px] bg-linear-to-br from-[#2a2a2a] via-[#171717] to-[#000000] p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-white/80">RAPIIN</p>
              <h1 className="mt-1 text-xl font-semibold">Halo, {nama}</h1>
              <p className="mt-1 text-xs text-white/80">
                Pantau proyek tanpa biaya bocor
              </p>
            </div>
            <button
              onClick={() => {
                const prioritas = dashboard.tahapan.find((item) => item.progres < 100);
                if (prioritas) {
                  setToast(`Fokus sekarang: ${prioritas.nama}`);
                  pindahKeSection("proyek", progresRef);
                  return;
                }
                setToast("Semua tahapan sudah selesai.");
              }}
              className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs backdrop-blur"
            >
              Langsung
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/20">
            <Image
              src="/images/ilustrasi-proyek.svg"
              alt="Ilustrasi proyek konstruksi"
              width={800}
              height={360}
              className="h-28 w-full object-cover"
              priority
            />
          </div>

          <div className="mt-4 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <p className="text-xs text-white/80">Total Anggaran Aktif</p>
            <p className="mt-1 text-3xl font-semibold">
              $
              {dashboard.totalAnggaranAktif.toLocaleString("id-ID")}
            </p>
            <div className="mt-3 h-2 rounded-full bg-white/30">
              <div
                className="h-2 rounded-full bg-white"
                style={{ width: `${dashboard.terpakaiPersen}%` }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-white/85">
              <span>Terpakai {dashboard.terpakaiPersen}%</span>
              <span>Variansi {dashboard.variansiPersen.toLocaleString("id-ID")}%</span>
            </div>
          </div>
        </header>

        <section className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow">
          <div className="grid grid-cols-4 gap-3">
            {aksiCepat.map((aksi) => {
              const Icon = ikonAksi[aksi.key];
              return (
                <button
                  key={aksi.label}
                  onClick={() => handleQuickAction(aksi.key)}
                  className="group flex flex-col items-center gap-2 rounded-2xl p-2 transition hover:-translate-y-0.5 hover:bg-[#f1f1f1]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#f0f0f0] to-[#dddddd] transition group-hover:scale-105">
                    <Icon className="h-5 w-5 stroke-[#111111]" />
                  </span>
                  <span className="text-center text-[11px] font-medium text-[--muted]">
                    {aksi.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section
          ref={progresRef}
          className={`reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow ${
            tampilProyek ? "" : "hidden"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <IconProgres className="h-4 w-4 stroke-[#111111]" />
              Tracking Progres Proyek
            </h2>
            <span className="rounded-full bg-[#e7e7e7] px-2 py-1 text-xs text-[#111111]">
              Real-time
            </span>
          </div>
          <div className="mt-3 space-y-3">
            {dashboard.tahapan.map((item) => (
              <article key={item.nama} className="rounded-2xl bg-[--soft] p-3">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-medium">{item.nama}</p>
                  <p className="font-mono text-[--muted]">{item.status}</p>
                </div>
                <div className="mt-2 h-2 rounded-full bg-[#d9d9d9]">
                  <div
                    className="h-2 rounded-full bg-linear-to-r from-[#111111] to-[#2a2a2a]"
                    style={{ width: `${item.progres}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          ref={estimasiRef}
          className={`reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow ${
            tampilProyek ? "" : "hidden"
          }`}
        >
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconKalkulasi className="h-4 w-4 stroke-[#111111]" />
            Estimasi Selesai Proyek
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <article className="rounded-2xl bg-[#f0f0f0] p-3">
              <p className="text-xs text-[--muted]">Rentang Tanggal</p>
              <p className="mt-1 text-sm font-semibold">{dashboard.estimasiSelesai}</p>
            </article>
            <article className="rounded-2xl bg-[#f0f0f0] p-3">
              <p className="text-xs text-[--muted]">Keyakinan AI</p>
              <p className="mt-1 text-sm font-semibold text-[#111111]">
                {dashboard.keyakinanAi}%
              </p>
            </article>
          </div>
        </section>

        <section
          ref={uploadRef}
          className={`reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow ${
            tampilBudget ? "" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <IconUnggah className="h-4 w-4 stroke-[#111111]" />
              Unggah Berkas Anggaran
            </h2>
            <Image
              src="/images/ilustrasi-upload.svg"
              alt="Ilustrasi unggah berkas"
              width={64}
              height={64}
              className="h-10 w-10"
            />
          </div>
          <p className="mt-1 text-xs text-[--muted]">
            Mendukung XLSX, CSV, PDF, DOCX, dan foto kuitansi
          </p>
          <button
            onClick={() => setShowUploadForm((prev) => !prev)}
            className="mt-3 w-full rounded-2xl border border-dashed border-[#bdbdbd] bg-[#f0f0f0] py-3 text-sm font-medium text-[#111111] transition hover:bg-[#e8e8e8]"
          >
            {showUploadForm ? "Tutup Form Berkas" : "+ Tambah Berkas"}
          </button>
          {showUploadForm ? (
            <form
              onSubmit={submitTambahBerkas}
              className="mt-3 space-y-2 rounded-2xl bg-[#f6f6f6] p-3"
            >
              <input
                value={namaBerkas}
                onChange={(e) => setNamaBerkas(e.target.value)}
                placeholder="Nama berkas"
                className="w-full rounded-xl border border-[#d4d4d4] bg-white px-3 py-2 text-sm outline-none ring-[#111111] focus:ring-2"
              />
              <select
                value={tipeBerkas}
                onChange={(e) => setTipeBerkas(e.target.value)}
                className="w-full rounded-xl border border-[#d4d4d4] bg-white px-3 py-2 text-sm outline-none ring-[#111111] focus:ring-2"
              >
                <option value="PDF">PDF</option>
                <option value="Spreadsheet">Spreadsheet</option>
                <option value="CSV">CSV</option>
                <option value="DOCX">DOCX</option>
              </select>
              <input
                value={ukuranBerkas}
                onChange={(e) => setUkuranBerkas(e.target.value)}
                placeholder="Ukuran (contoh: 1.2 MB)"
                className="w-full rounded-xl border border-[#d4d4d4] bg-white px-3 py-2 text-sm outline-none ring-[#111111] focus:ring-2"
              />
              <button
                type="submit"
                disabled={isUploading}
                className="w-full rounded-xl bg-[#111111] py-2 text-sm font-medium text-white"
              >
                {isUploading ? "Menyimpan..." : "Simpan Berkas"}
              </button>
            </form>
          ) : null}
          <div className="mt-3 space-y-2">
            {dashboard.antreanBerkas.map((berkas) => (
              <article
                key={berkas.id}
                className="flex items-center justify-between rounded-xl bg-[#f3f3f3] p-3 text-xs"
              >
                <div>
                  <p className="font-medium">{berkas.nama}</p>
                  <p className="font-mono text-[--muted]">{berkas.tipe}</p>
                </div>
                <p className="text-[--muted]">{berkas.ukuran}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          ref={aiRef}
          className={`reveal mt-4 overflow-hidden rounded-3xl bg-[--card] p-4 soft-shadow ${
            tampilBudget ? "" : "hidden"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <IconAI className="h-4 w-4 stroke-[#111111]" />
              Analisis Anggaran Otomatis (AI)
            </h2>
          </div>
          <Image
            src="/images/ilustrasi-ai.svg"
            alt="Ilustrasi analisis AI anggaran"
            width={800}
            height={260}
            className="mb-3 h-24 w-full rounded-2xl object-cover"
          />
          <div className="space-y-2">
            {dashboard.analisis.map((analisis, index) => (
              <article
                key={analisis}
                className={`rounded-xl border border-[#d4d4d4] p-3 ${
                  index === 0 ? "bg-[#f7f7f7]" : "bg-[#f1f1f1]"
                }`}
              >
                <p className="text-xs font-semibold text-[#111111]">{analisis}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          ref={budgetRef}
          className={`reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow ${
            tampilBudget ? "" : "hidden"
          }`}
        >
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconUang className="h-4 w-4 stroke-[#111111]" />
            Monitoring Pemakaian Budget
          </h2>
          <div className="mt-3 h-2 rounded-full bg-[#dfdfdf]">
            <div
              className="h-2 rounded-full bg-[#111111]"
              style={{ width: `${dashboard.terpakaiPersen}%` }}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <article className="rounded-xl bg-[#f3f3f3] p-2">
              <p className="text-[--muted]">Struktur</p>
              <p className="mt-1 font-semibold">{dashboard.pemakaianKategori.struktur}%</p>
            </article>
            <article className="rounded-xl bg-[#f3f3f3] p-2">
              <p className="text-[--muted]">MEP</p>
              <p className="mt-1 font-semibold">{dashboard.pemakaianKategori.mep}%</p>
            </article>
            <article className="rounded-xl bg-[#f3f3f3] p-2">
              <p className="text-[--muted]">Interior</p>
              <p className="mt-1 font-semibold">{dashboard.pemakaianKategori.interior}%</p>
            </article>
          </div>
        </section>

        <section
          ref={vendorRef}
          className={`reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow ${
            tampilProyek ? "" : "hidden"
          }`}
        >
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconVendor className="h-4 w-4 stroke-[#111111]" />
            Rekomendasi Kontraktor
          </h2>
          <div className="mt-3 space-y-2">
            {dashboard.rekomendasiVendor.map((vendor) => (
              <article key={vendor.nama} className="rounded-xl bg-[#f3f3f3] p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{vendor.nama}</p>
                  <span className="rounded-full bg-white px-2 py-1 text-xs font-mono text-[#111111]">
                    {vendor.skor}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[--muted]">{vendor.alasan}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={`reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow ${
            tampilProfil ? "" : "hidden"
          }`}
        >
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconProfil className="h-4 w-4 stroke-[#111111]" />
            Profil Pengguna
          </h2>
          <article className="mt-3 rounded-2xl bg-[#f3f3f3] p-4 text-sm">
            <p className="font-semibold text-[#111111]">{nama}</p>
            <p className="mt-1 text-[--muted]">Akun sudah terhubung ke backend API.</p>
            <button
              onClick={onLogout}
              className="mt-4 rounded-xl bg-[#111111] px-4 py-2 text-xs font-medium text-white"
            >
              Keluar
            </button>
          </article>
        </section>

        <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md border-t border-[#d4d4d4] bg-white/92 px-6 py-3 backdrop-blur-xl">
          <ul className="grid grid-cols-4 gap-2 text-center text-[11px] text-[--muted]">
            {[
              { key: "beranda" as const, label: "Beranda", Icon: IconRumah },
              { key: "proyek" as const, label: "Proyek", Icon: IconProgres },
              { key: "budget" as const, label: "Budget", Icon: IconUang },
              { key: "profil" as const, label: "Profil", Icon: IconProfil },
            ].map((item) => {
              const aktif = activeTab === item.key;
              return (
                <li key={item.key}>
                  <button
                    onClick={() => setActiveTab(item.key)}
                    className={`flex w-full flex-col items-center gap-1 ${
                      aktif ? "font-semibold text-[#111111]" : ""
                    }`}
                  >
                    <item.Icon
                      className={`h-4 w-4 ${aktif ? "stroke-[#111111]" : "stroke-[#6b7280]"}`}
                    />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="mx-auto mt-6 hidden max-w-5xl px-4 md:block">
        <article className="reveal rounded-3xl border border-[#d4d4d4] bg-white/80 p-6 backdrop-blur-md soft-shadow">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--muted]">
            Panel Pendamping Desktop
          </p>
          <h3 className="mt-2 text-xl font-semibold">Ringkasan Cepat Proyek</h3>
          <p className="mt-2 text-sm text-[--muted]">
            Desain utama tetap mobile-first, desktop dipakai sebagai panel monitor
            tambahan dengan gaya visual yang sama.
          </p>
        </article>
      </section>
    </main>
  );
}

export default function Home() {
  const [fase, setFase] = useState<
    "splash" | "onboarding" | "login" | "dashboard"
  >("splash");
  const [namaUser, setNamaUser] = useState("Ariel");
  const [dashboardData, setDashboardData] =
    useState<DashboardData>(defaultDashboardData);
  const [authToken, setAuthToken] = useState("");
  const [statusDashboard, setStatusDashboard] = useState<
    "idle" | "loading" | "error" | "ready"
  >("idle");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFase("onboarding");
    }, 1700);
    return () => window.clearTimeout(timer);
  }, []);

  if (fase === "splash") {
    return <SplashScreen />;
  }

  if (fase === "onboarding") {
    return <OnboardingScreen onFinish={() => setFase("login")} />;
  }

  if (fase === "login") {
    return (
      <LoginDummy
        onLogin={async (auth) => {
          setNamaUser(auth.user.nama);
          setAuthToken(auth.token);
          setStatusDashboard("loading");

          try {
            const response = await fetch("/api/dashboard", {
              headers: {
                authorization: `Bearer ${auth.token}`,
              },
            });
            if (!response.ok) {
              throw new Error("Gagal mengambil dashboard.");
            }

            const payload = (await response.json()) as {
              data: DashboardData;
            };

            setDashboardData(payload.data);
            setStatusDashboard("ready");
          } catch {
            setStatusDashboard("error");
          }

          setFase("dashboard");
        }}
      />
    );
  }

  if (fase === "dashboard" && statusDashboard === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <p className="text-sm text-[--muted]">Memuat data dashboard...</p>
      </main>
    );
  }

  return (
    <>
      {statusDashboard === "error" ? (
        <div className="fixed inset-x-0 top-3 z-40 mx-auto w-fit rounded-full bg-[#111111] px-4 py-2 text-xs text-white">
          API dashboard gagal diakses. Menampilkan data fallback lokal.
        </div>
      ) : null}
      <Dashboard
        nama={namaUser}
        data={dashboardData}
        token={authToken}
        onLogout={() => {
          setAuthToken("");
          setStatusDashboard("idle");
          setFase("login");
        }}
      />
    </>
  );
}
