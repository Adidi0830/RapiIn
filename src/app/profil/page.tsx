import Link from "next/link";

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

export default function HalamanProfil() {
  return (
    <main className="app-shell app-main min-h-screen px-4 py-6">
      <section className="w-full">
        <header className="rounded-3xl border border-[#d4d4d4] bg-white px-5 py-4 soft-shadow">
          <p className="text-[10px] tracking-[0.28em] text-[#111111]">RAPIIN</p>
          <h1 className="mt-1 text-2xl font-semibold">Halaman Profil</h1>
          <p className="mt-1 text-sm text-[--muted]">
            Placeholder profil. Nanti kamu bisa isi data user, role, dan pengaturan
            akun di sini.
          </p>
        </header>

        <section className="mt-5 rounded-3xl border border-[#d4d4d4] bg-white p-5 soft-shadow">
          <p className="text-sm text-[--muted]">
            Konten profil siap kamu sesuaikan langkah berikutnya.
          </p>
        </section>

        <nav className="bottom-nav-safe fixed bottom-0 left-1/2 z-20 w-full app-max-width -translate-x-1/2 border-t border-[#d4d4d4] bg-white/92 px-6 pt-3 backdrop-blur-xl">
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
              <Link
                href="/proyek"
                className="flex w-full flex-col items-center gap-1 text-[#6b7280]"
              >
                <IconProgres className="h-4 w-4 stroke-[#6b7280]" />
                Proyek
              </Link>
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
              <span className="flex w-full flex-col items-center gap-1 font-semibold text-[#111111]">
                <IconProfil className="h-4 w-4 stroke-[#111111]" />
                Profil
              </span>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
