"use client";

import { DashboardSidebar } from "@/components/_shared/sidebar/DashboardSidebar";
import { DashboardHeader } from "@/components/_shared/header/DashboardHeader";
// import { useAuth } from "@/contexts/authContext";
// import { ROLE } from "@/utils/constants";

export default function DashboardOverviewPage() {
  // const { user } = useAuth();
  // const role = user?.role;

  // Dummy data sementara
  const user = { fullname: "Dummy User", role: "ADMIN" };
  const ROLE = { ADMIN: "ADMIN", ORGANIZER: "ORGANIZER" };

  return (
    <>
      {/* HEADER */}
      <DashboardHeader title="Dashboard" />

      {/* MAIN CONTENT */}
      <main className="md:p-5 p-3 bg-red-100 min-h-screen space-y-6">
        {/* Info Section */}
        <section className="w-full bg-[#E11B22] text-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">Selamat datang di Backoffice</h2>
          <p className="text-sm mb-4">
            Kelola semua aktivitas dan data sistem secara efisien melalui halaman ini. 
            Backoffice dirancang untuk memudahkan admin dan organizer.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* ADMIN ONLY FEATURE */}
          {user?.role === ROLE.ADMIN && (
            <div className="bg-red-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Manajemen User</h3>
              <p className="text-sm text-gray-600">
                Tambah, edit, atau hapus data pengguna, termasuk peran admin dan organizer.
              </p>
            </div>
          )}

          <div className="bg-red-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Postingan</h3>
            <p className="text-sm text-gray-600">
              Buat dan atur event atau kegiatan kampus agar selalu up-to-date.
            </p>
          </div>

          <div className="bg-red-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Manajemen Organisasi</h3>
            <p className="text-sm text-gray-600">
              Kelola organisasi mahasiswa dan struktur anggotanya dengan mudah.
            </p>
          </div>
        </section>
      </main>
    </>
    // <main className="min-h-screen flex bg-[#FDF3F3]">
    //   {/* SIDEBAR */}
    //   <DashboardSidebar />

    //   {/* MAIN CONTENT */}
    //   <section className="flex-1 flex flex-col">
    //     {/* HEADER */}
    //     <DashboardHeader title="Dasboard" />

    //     {/* BODY */}
    //     <div className="flex-1 px-10 py-8">
    //       {/* Welcome banner */}
    //       <div className="w-full">
    //         <div className="bg-[#E11B22] text-white rounded-2xl px-6 py-5 shadow-[6px_6px_0px_rgba(0,0,0,0.12)]">
    //           <h2 className="text-lg md:text-xl font-semibold">
    //             Selamat Datang di backoffice, nama Login!
    //           </h2>
    //           <p className="text-xs md:text-sm mt-1 opacity-90">
    //             Kelola postingan Organisasi dan LAB anda
    //           </p>
    //         </div>
    //       </div>

    //       {/* Feature cards */}
    //       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
    //         <div className="bg-white rounded-2xl shadow-md px-5 py-4">
    //           <h3 className="text-sm md:text-base font-semibold text-gray-800">
    //             Manajemen Organisasi dan Lab
    //           </h3>
    //           <p className="text-[11px] md:text-xs text-gray-500 mt-1">
    //             Kelola Organisasi dan Lab anda dengan mudah
    //           </p>
    //         </div>

    //         <div className="bg-white rounded-2xl shadow-md px-5 py-4">
    //           <h3 className="text-sm md:text-base font-semibold text-gray-800">
    //             Postingan
    //           </h3>
    //           <p className="text-[11px] md:text-xs text-gray-500 mt-1">
    //             Tambah, edit, atau hapus postingan anda
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
}
