"use client";
import Link from "next/link";
import { useLang } from "../lib/LangContext";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer style={{ background: "#0f1f35" }} className="pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-12">
        <div className="grid grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg">SecureNova</span>
            </Link>
            <p className="text-sm text-slate-500 mb-4">{f.tagline}</p>
            <div className="flex gap-4">
              {["𝕏","in","⌥","✉"].map(s => (
                <span key={s} className="text-slate-500 hover:text-cyan-400 cursor-pointer text-lg">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{f.solutions}</h4>
            {f.solutionLinks.map(l => (
              <Link key={l} href="/solutions"
                className="block text-slate-500 text-sm mb-2.5 no-underline hover:text-white transition-colors">
                {l}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{f.company}</h4>
            {f.companyLinks.map(l => (
              <Link key={l} href="/about"
                className="block text-slate-500 text-sm mb-2.5 no-underline hover:text-white transition-colors">
                {l}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{f.contact}</h4>
            <p className="text-slate-500 text-sm mb-2">contact@securenova.ai</p>
            <p className="text-slate-500 text-sm mb-2">+222 XX XX XX XX</p>
            <p className="text-slate-500 text-sm">Nouakchott, Mauritanie</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-slate-500 text-sm">
          © 2026 SecureNova. {f.rights}
        </div>
      </div>
    </footer>
  );
}
