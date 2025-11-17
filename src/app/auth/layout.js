import "../globals.css"; 
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auth - SIORMA",
  description: "Authentication pages for SIORMA",
};

export default function AuthLayout({ children }) {
  return (
    <div
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        antialiased
        bg-[#E9DADA]
        min-h-screen
        flex
        items-center
        justify-center
      `}
    >
      {children}
    </div>
  );
}
