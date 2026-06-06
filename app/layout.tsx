import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LangProvider } from "./lib/LangContext";

export const metadata: Metadata = {
  title: "SecureNova — AI-Powered Cybersecurity for Africa",
  description: "Protect identities, prevent fraud, secure transactions, and defend digital infrastructures with next-generation AI security solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <LangProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
