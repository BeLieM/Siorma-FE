import Image from "next/image";
import Link from "next/link";
import CardOrmawa from "@/components/ui/CardOrmawa";

export default function ListOrmawaPage() {
    return (
        <div className="min-h-screen bg-[#F8EDE9]">
            
            {/* Navbar */}
            <header className="w-full bg-white border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* kiri - logo + text */}
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
                        <Link href="#" 
                        className="text-black hover:text-[#A63E35] transition-colors">
                            Keluar
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 mt-8 mb-6 pb-28">
                {/* List Ormawa */}
                <p className="text-[#3f1f1d] font-medium mt-3">List Ormawa</p>
            
                {/* Search Bar */}
                <div className="mt-2">
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

                {/* List - Ormawa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                    
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