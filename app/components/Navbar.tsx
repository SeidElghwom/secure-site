"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "../lib/LangContext";
import { Locale } from "../lib/i18n";

const LANGS: { code: Locale; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "ar", flag: "🇸🇦", label: "AR" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t, locale, setLocale, isRTL } = useLang();
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: "/solutions", label: t.nav.solutions },
    { href: "/industries", label: t.nav.industries },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/research", label: t.nav.research },
    { href: "/about", label: t.nav.about },
  ];

  const current = LANGS.find(l => l.code === locale)!;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-16 flex items-center justify-between px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" />
          </svg>
        </div>
        <span className="font-bold text-lg text-slate-900">SecureNova</span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}
            className={`text-sm font-medium transition-colors no-underline ${
              pathname === l.href ? "text-cyan-500" : "text-slate-600 hover:text-cyan-500"
            }`}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-sm text-slate-600 font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors bg-white cursor-pointer"
          >
            <span>{current.flag}</span>
            <span>{current.label}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${langOpen ? "rotate-180" : ""}`}>
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {langOpen && (
            <div className="absolute top-full mt-1 right-0 bg-white border border-slate-200 rounded-xl shadow-lg py-1 min-w-[110px] z-50">
              {LANGS.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-left hover:bg-slate-50 transition-colors cursor-pointer ${
                    locale === lang.code ? "text-cyan-500" : "text-slate-600"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label === "EN" ? "English" : lang.label === "FR" ? "Français" : "العربية"}</span>
                  {locale === lang.code && <span className="ml-auto text-cyan-500">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link href="/about" className="text-sm text-slate-600 font-medium no-underline hover:text-cyan-500">
          {t.nav.contact}
        </Link>
        <Link href="/pricing"
          className="text-sm font-semibold text-white px-4 py-2 rounded-lg no-underline"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
          {t.nav.requestDemo}
        </Link>
      </div>
    </nav>
  );
}
