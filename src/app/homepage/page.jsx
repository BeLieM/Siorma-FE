import CardOrmawa from "@/components/ui/CardOrmawa";
import CardPendaftaran from "@/components/ui/CardPendaftaran";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#F8EDE9]">

            {/* Navbar */}
            <header className="w-full bg-white border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Kiri - Logo + Text */}
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-[#A63E35] rounded-xl flex items-center justify-center">
                            <Image
                            src="/Logo.png"
                            alt="Logo SIORMA"
                            width={64}
                            height={64}
                            className="object-contain"
                            priority
                            />
                        </div>

                        <div className="leading-tight">
                            <p className="text-[17px] font-semibold text-black">Siorma</p>
                            <p className="text-sm text-gray-500">
                                Sistem Organisasi Mahasiswa
                            </p>
                        </div>
                    </div>

                    {/* Kanan - Menu */}
                    <nav className="flex items-center gap-10 text-[15px] font-medium">
                        <Link href="/list-ormawa" 
                        className="text-black hover:text-[#A63E35] transition-colors">
                            Ormawa
                        </Link>

                        <Link href="/list-postingan" 
                        className="text-black hover:text-[#A63E35] transition-colors">
                            Post
                        </Link>

                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 mt-8 mb-6 pb-28">

                {/* Red Banner */}
                <div className="w-full bg-red-600 rounded-4xl px-8 py-8 md:px-12 md:py-10">
                    <h1 className="text-white text-3xl md:text-4xl font-bold">
                        Selamat Datang, John Smith!
                    </h1>

                    <p className="text-white text-base md:text-lg mt-2 leading-relaxed">
                        Temukan peluang untuk bergabung dengan berbagai organisasi dan laboratorium kampus.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mt-6">
                    <div className="w-full bg-white rounded-2xl px-6 py-4 shadow-sm border border-[#ebe3e3] flex items-center gap-3">
                        {/* Icon Seach */}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#9b4c48]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        >
                            <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg>

                        {/* Input */}
                        <input 
                        type="text"
                        placeholder="Cari organisasi atau Laboratorium.."
                        className="w-full outline-none text-[#7e3c3a] placeholder-[#9b4c48] bg-transparent"
                        />
                    </div>
                </div>

                {/* Kategori */}
                <p className="text-[#3f1f1d] font-medium mt-3">Kategori</p>

                <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-3">

                    <button className="w-full px-5 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-[#e6e0de] hover:bg-[#f5f0ef] transition text-center">
                        Semua
                    </button>

                    <button className="w-full px-5 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-[#e6e0de] hover:bg-[#f5f0ef] transition text-center">
                        Teknologi
                    </button>

                    <button className="w-full px-5 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-[#e6e0de] hover:bg-[#f5f0ef] transition text-center">
                        Sosial
                    </button>

                    <button className="w-full px-5 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-[#e6e0de] hover:bg-[#f5f0ef] transition text-center">
                        Seni & Budaya
                    </button>

                    <button className="w-full px-5 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-[#e6e0de] hover:bg-[#f5f0ef] transition text-center">
                        Akademik
                    </button>

                    <button className="w-full px-5 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-[#e6e0de] hover:bg-[#f5f0ef] transition text-center">
                        Olahraga
                    </button>

                </div>

                {/* Pendaftaran Tersedia */}
                <p className="text-[#3f1f1d] font-medium mt-10 mb-4">
                    Pendaftaran Tersedia (4)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 */}
                    <CardPendaftaran
                        tags={["Organisasi", "BUKA", "Teknologi"]}
                        title="Himpunan Mahasiswa Informatika"
                        subtitle="Rekrutmen anggota baru periode 2025/2026"
                        deadline="30 Nov 2025"
                        lowongan="20 Lowongan"
                    />

                    {/* CARD 2 */}
                    <CardPendaftaran
                        tags={["LAB", "BUKA", "Teknologi"]}
                        title="Motion Laboratorium"
                        subtitle="Rekrutmen anggota baru periode 2025/2026"
                        deadline="30 Nov 2025"
                        lowongan="20 Lowongan"
                    />

                    {/* CARD 3 */}
                    <CardPendaftaran
                        tags={["Organisasi", "BUKA", "Sosial"]}
                        title="Himpunan Pemungut Sampah Bandung"
                        subtitle="Rekrutmen anggota baru periode 2025/2026"
                        deadline="30 Nov 2025"
                        lowongan="3 Lowongan"
                    />

                    {/* CARD 4 */}
                    <CardPendaftaran
                        tags={["LAB", "Segera ditutup", "Teknologi"]}
                        title="AI Laboratorium"
                        subtitle="Rekrutmen anggota baru periode 2025/2026"
                        deadline="30 Nov 2025"
                        lowongan="3 Lowongan"
                    />

                </div>

                {/* Ormawa */}
                <p className="text-[#3f1f1d] font-medium mt-10 mb-4">Ormawa</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    
                    <CardOrmawa 
                        title="Himpunan Mahasiswa Informatika"
                        tags={["Organisasi", "Teknologi"]}
                    />

                    <CardOrmawa
                        title="Himpunan Mahasiswa Sastra Mesin"
                        tags={["Organisasi", "Teknologi"]}
                    />

                    <CardOrmawa
                        title="Motion Laboratorium"
                        tags={["LAB", "Teknologi"]}
                    />

                    <CardOrmawa
                        title="Volley Telkom"
                        tags={["Organisasi", "Olahraga"]}
                    />
                </div>
            </main>
        </div>
    );
}