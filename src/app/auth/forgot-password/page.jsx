import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
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
                <h1 className="text-[#B53A3A] text-2xl font-bold mt-3">Reset Password Akun Anda</h1>
            </div>

            {/* Instruction */}
            <p className="text-sm text-gray-700 mb-4">
                Masukkan email anda, dan kami akan mengirimkan link untuk mereset password.
            </p>

            {/* Email Field */}
            <label className="block font-semibold text-gray-800 mb-2">
                Email
            </label>

            <input
                type="email"
                placeholder="abcd@gmail.com"
                className="
                w-full p-3 rounded-2xl border border-red-400 
                focus:outline-none focus:ring-2 focus:ring-red-300 
                shadow-sm shadow-red-200 text-gray-700
                "
            />

            {/* Submit Button */}
            <button
                className="
                w-full mt-6 py-2 rounded-2xl border border-red-500
                text-red-500 font-semibold text-lg
                hover:bg-red-500 hover:text-white transition-all
                "
            >
                Kirim Link Reset
            </button>

            {/* Back to login */}
            <div className="mt-6 text-center">
                <a href="/auth/login" className="text-red-600 font-semibold hover:underline">
                Kembali ke Login
                </a>
            </div>
        </div>
    );
}