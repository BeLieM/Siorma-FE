// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "SIORMA",
  description: "Sistem Organisasi Mahasiswa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EBDDDD] min-h-screen">
        {children}
        </body>
    </html>
  );
}
