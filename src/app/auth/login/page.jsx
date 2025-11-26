import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-red-100 shadow-red-200">
            {/* Logo Section */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-[#B53A3A]/10">
                        <Image
                            src="/Logo.png"
                            alt="Logo SIORMA"
                            width={64}
                            height={64}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <h1 className="text-[#B53A3A] text-2xl font-bold mt-3">SIORMA</h1>
                    <p className="text-gray-600 -mt-1">Sistem Organisasi Mahasiswa</p>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block font-semibold text-gray-800 mb-2">Email atau NIM</label>
                    <input
                        type="text"
                        placeholder="abcd@gmail.com"
                        className="
                        w-full 
                        px-5 py-3 
                        text-[#9F5555] 
                        placeholder-[#C7A5A5] 
                        bg-white
                        border border-red-600
                        rounded-xl
                        shadow-[0_6px_12px_rgba(229,113,113,0.35)]
                        focus:outline-none
                        focus:ring-2 focus:ring-[#E38D8D]
                        focus:border-[#D06C6C]
                        transition"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block font-semibold text-gray-800 mb-2">Password</label>
                    <input
                        type="text"
                        placeholder="Masukkan Password Anda"
                        className="
                        w-full 
                        px-5 py-3 
                        text-[#9F5555] 
                        placeholder-[#C7A5A5] 
                        bg-white
                        border border-red-600
                        rounded-xl
                        shadow-[0_6px_12px_rgba(229,113,113,0.35)]
                        focus:outline-none
                        focus:ring-2 focus:ring-[#E38D8D]
                        focus:border-[#D06C6C]
                        transition"
                    />
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between w-full mt-4">
                    <label className="flex items-center gap-2 cursor-pointer select-none group">
                        <input 
                            type="checkbox"
                            id="remember"
                            className="hidden"
                        />

                        <div className="
                            w-6 h-6 rounded-md border border-red-600 
                            flex items-center justify-center
                            group-has-checked:bg-red-600 
                            group-has-checked:border-red-600
                            transition-all
                        ">
                            <svg
                                className="
                                    w-6 h-6 text-white 
                                    opacity-0 
                                    group-has-checked:opacity-100
                                    transition-opacity
                                "
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-gray-800">Ingat Saya</span>
                    </label>

                    <Link 
                        href="/auth/forgot-password"
                        className="text-red-600 font-semibold hover:underline"
                    >
                        Lupa Password?
                    </Link>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center text-gray-400 my-4">
                    <span className="flex-1 h-px bg-gray-300"></span>
                    <span className="px-2 text-sm">Atau</span>
                    <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* Button */}
                <button className="w-full py-3 bg-white border border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition">
                    Login
                </button>
        </div>
    );
}