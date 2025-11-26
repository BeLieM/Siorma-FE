import Image from "next/image";
import CardPendaftaran from "@/components/ui/CardPendaftaran";

export default function ListPostPage() {
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
                            <p className="text-[17px] font-semibold text-black">SIORMA</p>
                            <p className="text-sm text-gray-500">Sistem Organisasi Mahasiswa</p>
                        </div>
                    </div>

                    <nav className="flex items-center gap-10 text-[15px] font-medium">
                        <a href="#" 
                        className="text-black hover:text-[#A63E35] transition-colors">
                            Keluar
                        </a>
                    </nav>
                </div>
            </header>


            <main className="max-w-7xl mx-auto px-4 mt-8 mb-6 pb-28">
                {/* List Ormawa */}
                <p className="text-[#3f1f1d] font-medium mt-3">List Postingan</p>

                {/* Search Bar */}
                <div className="mt-2 mb-4">
                    <div className="w-full bg-white rounded-2xl px-6 py-4 shadow-sm border border-[#ebe3e3] flex items-center gap-3">
                        {/* Icon Search */}
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
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <input
                        type="text"
                        placeholder="Cari postingan..."
                        className="w-full outline-none text-sm text-gray-600 placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Daftar Postingan */}
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
            </main>
        </div>
    );
}