"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { FormEvent, SVGProps } from "react";
import { useEffect, useState } from "react";

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

type RoleUser = "konsumen" | "kontraktor";

type DummyUser = {
  id: string;
  nama: string;
  email: string;
  password: string;
  role: RoleUser;
};

const dummyUsers: DummyUser[] = [
  {
    id: "u-konsumen-1",
    nama: "Ariel",
    email: "konsumen@rapiin.id",
    password: "123456",
    role: "konsumen",
  },
  {
    id: "u-konsumen-2",
    nama: "Budi",
    email: "budi@rapiin.id",
    password: "123456",
    role: "konsumen",
  },
  {
    id: "u-kontraktor-1",
    nama: "CV Atlas Konstruksi",
    email: "kontraktor@rapiin.id",
    password: "123456",
    role: "kontraktor",
  },
];

function SplashScreen() {
  return (
    <main className="app-shell splash-bg relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute -left-14 top-24 h-40 w-40 rounded-full bg-white/8 blur-2xl" />
      <div className="pointer-events-none absolute -right-12 bottom-24 h-44 w-44 rounded-full bg-white/6 blur-2xl" />
      <section className="splash-pop text-center text-white">
        <div className="splash-logo-wrap relative mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-4xl border border-white/20 bg-white/12 p-2.5 shadow-[0_16px_34px_rgba(0,0,0,0.35)] backdrop-blur-md">
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
    <main className="app-shell flex min-h-screen items-center justify-center px-4 py-6">
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
  onLogin: (user: DummyUser) => void;
}) {
  const [email, setEmail] = useState("konsumen@rapiin.id");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Email dan kata sandi wajib diisi.");
      return;
    }

    const user = dummyUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
    );
    if (!user) {
      setError("Akun dummy tidak ditemukan. Cek email/kata sandi.");
      return;
    }

    setError("");
    onLogin(user);
  }

  return (
    <main className="app-shell flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-5 soft-shadow">
        <p className="text-[10px] tracking-[0.28em] text-[#111111]">RAPIIN</p>
        <h1 className="mt-2 text-2xl font-semibold text-[#111111]">Masuk Akun</h1>
        <p className="mt-1 text-sm text-[--muted]">
          Dummy login frontend dulu. Backend autentikasi nanti kita sambungkan.
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
            className="w-full rounded-xl bg-linear-to-r from-[#111111] to-[#2a2a2a] py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Masuk ke RapiIn
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-[--muted]">
          Akun dummy:{" "}
          <span className="font-mono">konsumen@rapiin.id</span>,{" "}
          <span className="font-mono">budi@rapiin.id</span>,{" "}
          <span className="font-mono">kontraktor@rapiin.id</span> (password:{" "}
          <span className="font-mono">123456</span>)
        </p>
      </section>
    </main>
  );
}

function Dashboard({
  nama,
  onResetFlow,
}: {
  nama: string;
  onResetFlow: () => void;
}) {
  const router = useRouter();
  const [tabAktif, setTabAktif] = useState<
    "beranda" | "proyek" | "budget" | "profil"
  >("beranda");
  const [infoAksi, setInfoAksi] = useState("");

  const tahapan = [
    { nama: "Persiapan Lokasi", progres: 100, status: "Selesai" },
    { nama: "Pekerjaan Struktur", progres: 74, status: "Lancar" },
    { nama: "Instalasi MEP", progres: 48, status: "Perlu Tinjau" },
  ];

  const antreanBerkas = [
    { nama: "RAB-Revisi-Q1.xlsx", tipe: "Spreadsheet", ukuran: "1.2 MB" },
    { nama: "Penawaran-Vendor-Maret.pdf", tipe: "PDF", ukuran: "4.8 MB" },
    { nama: "Pengadaan.csv", tipe: "CSV", ukuran: "740 KB" },
  ];

  const rekomendasi = [
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
  ];

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

  function scrollKe(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function bukaFilePicker() {
    const input = document.getElementById(
      "input-berkas-anggaran",
    ) as HTMLInputElement | null;
    input?.click();
  }

  function handleAksiCepat(
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
      setTabAktif("proyek");
      router.push("/proyek");
      return;
    }
    if (key === "estimasi") {
      setTabAktif("proyek");
      router.push("/proyek");
      return;
    }
    if (key === "unggah") {
      setTabAktif("budget");
      scrollKe("section-upload");
      bukaFilePicker();
      return;
    }
    if (key === "ai") {
      setTabAktif("budget");
      scrollKe("section-ai");
      return;
    }
    if (key === "anggaran") {
      setTabAktif("budget");
      scrollKe("section-budget");
      return;
    }
    if (key === "kontraktor") {
      setTabAktif("proyek");
      router.push("/proyek");
      return;
    }
    if (key === "laporan") {
      setInfoAksi("Halaman laporan siap kamu isi di langkah berikutnya.");
      return;
    }
    setInfoAksi("Belum ada notifikasi baru.");
  }

  return (
    <main className="app-shell app-main relative min-h-screen pt-4">
      <section className="w-full px-4">
        <header className="reveal rounded-[34px] bg-linear-to-br from-[#2a2a2a] via-[#171717] to-[#000000] p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-white/80">RAPIIN</p>
              <h1 className="mt-1 text-xl font-semibold">Halo, {nama}</h1>
              <p className="mt-1 text-xs text-white/80">
                Pantau proyek tanpa biaya bocor
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollKe("quick-actions")}
                className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs backdrop-blur"
              >
                Langsung
              </button>
              <button
                onClick={onResetFlow}
                className="rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs backdrop-blur"
              >
                Reset Alur
              </button>
            </div>
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
            <p className="mt-1 text-3xl font-semibold">$1.240.000</p>
            <div className="mt-3 h-2 rounded-full bg-white/30">
              <div className="h-2 w-[58%] rounded-full bg-white" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-white/85">
              <span>Terpakai 58%</span>
              <span>Variansi -3,6%</span>
            </div>
          </div>
        </header>

        {infoAksi ? (
          <section className="reveal mt-4 rounded-2xl border border-[#d4d4d4] bg-[#f2f2f2] px-3 py-2 text-xs text-[#111111]">
            {infoAksi}
          </section>
        ) : null}

        <section
          id="quick-actions"
          className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow"
        >
          <div className="grid grid-cols-4 gap-3">
            {aksiCepat.map((aksi) => {
              const Icon = ikonAksi[aksi.key];
              return (
                <button
                  key={aksi.label}
                  onClick={() => handleAksiCepat(aksi.key)}
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
          id="section-progres"
          className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow"
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
            {tahapan.map((item) => (
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
          id="section-estimasi"
          className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow"
        >
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconKalkulasi className="h-4 w-4 stroke-[#111111]" />
            Estimasi Selesai Proyek
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <article className="rounded-2xl bg-[#f0f0f0] p-3">
              <p className="text-xs text-[--muted]">Rentang Tanggal</p>
              <p className="mt-1 text-sm font-semibold">8 - 16 Nov 2026</p>
            </article>
            <article className="rounded-2xl bg-[#f0f0f0] p-3">
              <p className="text-xs text-[--muted]">Keyakinan AI</p>
              <p className="mt-1 text-sm font-semibold text-[#111111]">84%</p>
            </article>
          </div>
        </section>

        <section
          id="section-upload"
          className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow"
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
          <input
            id="input-berkas-anggaran"
            type="file"
            multiple
            className="hidden"
            onChange={(e) => {
              const total = e.target.files?.length ?? 0;
              if (total > 0) {
                setInfoAksi(`${total} berkas dipilih. Siap diproses.`);
              }
            }}
          />
          <button
            onClick={bukaFilePicker}
            className="mt-3 w-full rounded-2xl border border-dashed border-[#bdbdbd] bg-[#f0f0f0] py-3 text-sm font-medium text-[#111111] transition hover:bg-[#e8e8e8]"
          >
            + Tambah Berkas
          </button>
          <div className="mt-3 space-y-2">
            {antreanBerkas.map((berkas) => (
              <article
                key={berkas.nama}
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
          id="section-ai"
          className="reveal mt-4 overflow-hidden rounded-3xl bg-[--card] p-4 soft-shadow"
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
            <article className="rounded-xl border border-[#d4d4d4] bg-[#f7f7f7] p-3">
              <p className="text-xs font-semibold text-[#2a2a2a]">
                Harga baja melampaui benchmark sebesar 11,4%
              </p>
            </article>
            <article className="rounded-xl border border-[#d4d4d4] bg-[#f1f1f1] p-3">
              <p className="text-xs font-semibold text-[#111111]">
                Potensi penghematan konsolidasi vendor: $21.800
              </p>
            </article>
          </div>
        </section>

        <section
          id="section-budget"
          className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow"
        >
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconUang className="h-4 w-4 stroke-[#111111]" />
            Monitoring Pemakaian Budget
          </h2>
          <div className="mt-3 h-2 rounded-full bg-[#dfdfdf]">
            <div className="h-2 w-[58%] rounded-full bg-[#111111]" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <article className="rounded-xl bg-[#f3f3f3] p-2">
              <p className="text-[--muted]">Struktur</p>
              <p className="mt-1 font-semibold">68%</p>
            </article>
            <article className="rounded-xl bg-[#f3f3f3] p-2">
              <p className="text-[--muted]">MEP</p>
              <p className="mt-1 font-semibold">52%</p>
            </article>
            <article className="rounded-xl bg-[#f3f3f3] p-2">
              <p className="text-[--muted]">Interior</p>
              <p className="mt-1 font-semibold">34%</p>
            </article>
          </div>
        </section>

        <section
          id="section-vendor"
          className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow"
        >
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconVendor className="h-4 w-4 stroke-[#111111]" />
            Rekomendasi Kontraktor
          </h2>
          <div className="mt-3 space-y-2">
            {rekomendasi.map((vendor) => (
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

        <section id="section-profil" className="reveal mt-4 rounded-3xl bg-[--card] p-4 soft-shadow">
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <IconProfil className="h-4 w-4 stroke-[#111111]" />
            Profil Pengguna
          </h2>
          <p className="mt-2 text-sm text-[--muted]">
            Halo {nama}. Bagian ini bisa kamu isi nanti dengan data profil, pengaturan,
            dan hak akses user.
          </p>
        </section>

        <nav className="bottom-nav-safe fixed bottom-0 left-1/2 z-20 w-full app-max-width -translate-x-1/2 border-t border-[#d4d4d4] bg-white/92 px-6 pt-3 backdrop-blur-xl">
          <ul className="grid grid-cols-4 gap-2 text-center text-[11px]">
            <li>
              <button
                onClick={() => {
                  setTabAktif("beranda");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`flex w-full flex-col items-center gap-1 ${
                  tabAktif === "beranda" ? "font-semibold text-[#111111]" : "text-[#6b7280]"
                }`}
              >
                <IconRumah
                  className={`h-4 w-4 ${tabAktif === "beranda" ? "stroke-[#111111]" : "stroke-[#6b7280]"}`}
                />
                Beranda
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTabAktif("proyek");
                  router.push("/proyek");
                }}
                className={`flex w-full flex-col items-center gap-1 ${
                  tabAktif === "proyek" ? "font-semibold text-[#111111]" : "text-[#6b7280]"
                }`}
              >
                <IconProgres
                  className={`h-4 w-4 ${tabAktif === "proyek" ? "stroke-[#111111]" : "stroke-[#6b7280]"}`}
                />
                Proyek
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTabAktif("budget");
                  scrollKe("section-budget");
                }}
                className={`flex w-full flex-col items-center gap-1 ${
                  tabAktif === "budget" ? "font-semibold text-[#111111]" : "text-[#6b7280]"
                }`}
              >
                <IconUang
                  className={`h-4 w-4 ${tabAktif === "budget" ? "stroke-[#111111]" : "stroke-[#6b7280]"}`}
                />
                Budget
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTabAktif("profil");
                  scrollKe("section-profil");
                }}
                className={`flex w-full flex-col items-center gap-1 ${
                  tabAktif === "profil" ? "font-semibold text-[#111111]" : "text-[#6b7280]"
                }`}
              >
                <IconProfil
                  className={`h-4 w-4 ${tabAktif === "profil" ? "stroke-[#111111]" : "stroke-[#6b7280]"}`}
                />
                Profil
              </button>
            </li>
          </ul>
        </nav>
      </section>

    </main>
  );
}

export default function Home() {
  const [fase, setFase] = useState<
    "booting" | "splash" | "onboarding" | "login" | "dashboard"
  >("booting");
  const [namaUser, setNamaUser] = useState(() => {
    if (typeof window === "undefined") return "Ariel";
    return localStorage.getItem("rapiin_user_name") || "Ariel";
  });

  useEffect(() => {
    let timer = 0;
    const bootstrap = window.setTimeout(() => {
      const splashShown = sessionStorage.getItem("rapiin_splash_shown") === "1";
      const onboardingDone = localStorage.getItem("rapiin_onboarding_done") === "1";
      const hasSessionUser = Boolean(localStorage.getItem("rapiin_session_user"));
      const isLoggedIn =
        localStorage.getItem("rapiin_logged_in") === "1" && hasSessionUser;

      if (!splashShown) {
        sessionStorage.setItem("rapiin_splash_shown", "1");
        setFase("splash");
        timer = window.setTimeout(() => {
          if (isLoggedIn) {
            setFase("dashboard");
            return;
          }
          if (onboardingDone) {
            setFase("login");
            return;
          }
          setFase("onboarding");
        }, 1700);
        return;
      }

      if (isLoggedIn) {
        setFase("dashboard");
        return;
      }
      if (onboardingDone) {
        setFase("login");
        return;
      }
      setFase("onboarding");
    }, 0);

    return () => {
      window.clearTimeout(bootstrap);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  if (fase === "booting") {
    return null;
  }

  if (fase === "splash") {
    return <SplashScreen />;
  }

  if (fase === "onboarding") {
    return (
      <OnboardingScreen
        onFinish={() => {
          localStorage.setItem("rapiin_onboarding_done", "1");
          setFase("login");
        }}
      />
    );
  }

  if (fase === "login") {
    return (
      <LoginDummy
        onLogin={(user) => {
          setNamaUser(user.nama);
          localStorage.setItem("rapiin_logged_in", "1");
          localStorage.setItem("rapiin_onboarding_done", "1");
          localStorage.setItem("rapiin_user_name", user.nama);
          localStorage.setItem("rapiin_user_role", user.role);
          localStorage.setItem("rapiin_user_id", user.id);
          localStorage.setItem("rapiin_session_user", JSON.stringify(user));
          setFase("dashboard");
        }}
      />
    );
  }

  return (
    <Dashboard
      nama={namaUser}
      onResetFlow={() => {
        localStorage.removeItem("rapiin_logged_in");
        localStorage.removeItem("rapiin_onboarding_done");
        localStorage.removeItem("rapiin_user_name");
        localStorage.removeItem("rapiin_user_role");
        localStorage.removeItem("rapiin_user_id");
        localStorage.removeItem("rapiin_session_user");
        sessionStorage.removeItem("rapiin_splash_shown");
        window.location.href = "/";
      }}
    />
  );
}
