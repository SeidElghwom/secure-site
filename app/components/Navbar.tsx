"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Shield, Globe, ChevronDown, Check } from "lucide-react";
import { useLang } from "../lib/LangContext";
import { Locale } from "../lib/i18n";

const LANGS: { code: Locale; flag: string; label: string; full: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN", full: "English" },
  { code: "fr", flag: "🇫🇷", label: "FR", full: "Français" },
  { code: "ar", flag: "🇸🇦", label: "AR", full: "العربية" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t, locale, setLocale } = useLang();
  const [langOpen, setLangOpen] = useState(false);
  const current = LANGS.find((l) => l.code === locale)!;

  const navLinks = [
    { href: "/solutions", label: t.nav.solutions },
    { href: "/industries", label: t.nav.industries },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/research", label: t.nav.research },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-10 bg-white/95 backdrop-blur border-b border-slate-100">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 no-underline group">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
        >
          <Shield size={18} color="white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-lg text-slate-900 tracking-tight">SecureNova</span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-7">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`text-sm font-medium no-underline transition-colors ${
              pathname === l.href
                ? "text-cyan-500"
                : "text-slate-600 hover:text-cyan-500"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-sm text-slate-600 font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-colors cursor-pointer"
          >
            <Globe size={14} className="text-slate-400" />
            <span>{current.flag}</span>
            <span>{current.label}</span>
            <ChevronDown
              size={12}
              className={`text-slate-400 transition-transform ${langOpen ? "rotate-180" : ""}`}
            />
          </button>
          {langOpen && (
            <div className="absolute top-full mt-1.5 right-0 bg-white border border-slate-200 rounded-xl shadow-xl py-1 min-w-[130px] z-50">
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-left hover:bg-slate-50 transition-colors cursor-pointer ${
                    locale === lang.code ? "text-cyan-500" : "text-slate-600"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.full}</span>
                  {locale === lang.code && (
                    <Check size={12} className="ml-auto text-cyan-500" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link href="/about" className="text-sm text-slate-600 font-medium no-underline hover:text-cyan-500 transition-colors">
          {t.nav.contact}
        </Link>

        <Link
          href="/pricing"
          className="text-sm font-semibold text-white px-4 py-2 rounded-lg no-underline transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
        >
          {t.nav.requestDemo}
        </Link>
      </div>
    </nav>
  );
}
