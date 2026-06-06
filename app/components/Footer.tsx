"use client";
import Link from "next/link";
import { Shield, Mail } from "lucide-react";
import { useLang } from "../lib/LangContext";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer style={{ background: "#0f1f35" }} className="pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
              >
                <Shield size={18} color="white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-lg">SecureNova</span>
            </Link>
            <p className="text-sm text-slate-500 mb-5 leading-relaxed">{f.tagline}</p>
            <div className="flex gap-3">
              {[Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{f.solutions}</h4>
            <ul className="flex flex-col gap-2.5">
              {f.solutionLinks.map((l) => (
                <li key={l}>
                  <Link href="/solutions" className="text-slate-500 text-sm no-underline hover:text-slate-300 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{f.company}</h4>
            <ul className="flex flex-col gap-2.5">
              {f.companyLinks.map((l) => (
                <li key={l}>
                  <Link href="/about" className="text-slate-500 text-sm no-underline hover:text-slate-300 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{f.contact}</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/contact" className="text-slate-500 text-sm no-underline hover:text-slate-300 transition-colors">contact@securenova.ai</Link>
              <p className="text-slate-500 text-sm">+222 XX XX XX XX</p>
              <p className="text-slate-500 text-sm">Nouakchott, Mauritanie</p>
              <Link href="/demo"
                className="mt-2 inline-flex text-xs font-semibold text-white px-3 py-1.5 rounded-lg no-underline"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
                Request Demo →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 text-center">
          <p className="text-slate-500 text-sm">© 2026 SecureNova. {f.rights}</p>
        </div>
      </div>
    </footer>
  );
}
