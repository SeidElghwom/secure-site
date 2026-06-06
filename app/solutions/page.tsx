"use client";
import Link from "next/link";
import {
  Shield, ScanFace, Fingerprint, AlertTriangle, Eye, TrendingUp,
  Search, Cpu, Network, Cloud, Lock, Wifi, Smartphone, ArrowRight, CheckCircle2,
} from "lucide-react";
import { useLang } from "../lib/LangContext";

const GRAD = "linear-gradient(135deg,#0ea5e9,#14b8a6)";
const GROUP_ICONS = [
  [Shield, ScanFace, Fingerprint, AlertTriangle],
  [Eye, TrendingUp, Search],
  [Network, Cloud, Lock],
  [Wifi, Smartphone],
];
const GROUP_GRADS = [
  ["linear-gradient(135deg,#0ea5e9,#14b8a6)","linear-gradient(135deg,#0ea5e9,#14b8a6)","linear-gradient(135deg,#3b82f6,#1d4ed8)","linear-gradient(135deg,#1e293b,#334155)"],
  ["linear-gradient(135deg,#06b6d4,#0891b2)","linear-gradient(135deg,#10b981,#059669)","linear-gradient(135deg,#3b82f6,#1d4ed8)"],
  ["linear-gradient(135deg,#0ea5e9,#14b8a6)","linear-gradient(135deg,#3b82f6,#1d4ed8)","linear-gradient(135deg,#10b981,#059669)"],
  ["linear-gradient(135deg,#10b981,#059669)","linear-gradient(135deg,#0ea5e9,#14b8a6)"],
];

export default function SolutionsPage() {
  const { t } = useLang();
  const sp = t.solutionsPage;
  return (
    <>
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">{sp.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.7)" }} className="max-w-xl mx-auto text-sm sm:text-base">{sp.subtitle}</p>
      </section>

      {sp.groups.map((g, gi) => (
        <section key={g.title} className="py-12 sm:py-16 px-4 sm:px-8 lg:px-10"
          style={{ background: gi % 2 === 1 ? "#f8fafc" : "#ffffff" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs font-semibold text-white px-3.5 py-1.5 rounded-full mb-4" style={{ background: GRAD }}>
                {g.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{g.title}</h2>
              <p className="text-slate-500 text-sm sm:text-base">{g.subtitle}</p>
            </div>
            {/* Always 1→2→auto cols based on card count */}
            <div className={`grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 ${
              g.cards.length >= 4 ? "lg:grid-cols-4" :
              g.cards.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 lg:max-w-2xl lg:mx-auto"
            }`}>
              {g.cards.map((c, ci) => {
                const Icon = GROUP_ICONS[gi]?.[ci] ?? Shield;
                const grad = GROUP_GRADS[gi]?.[ci] ?? GRAD;
                return (
                  <div key={c.name}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-sm" style={{ background: grad }}>
                      <Icon size={22} color="white" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">{c.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mb-4 leading-relaxed">{c.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {c.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 text-center" style={{ background: "#0f1f35" }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{sp.ctaTitle}</h2>
        <p className="text-slate-400 mb-8 sm:mb-10 max-w-md mx-auto text-sm sm:text-base">{sp.ctaSubtitle}</p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl no-underline hover:opacity-90 transition-opacity"
            style={{ background: GRAD }}>
            {sp.requestDemo} <ArrowRight size={14} />
          </Link>
          <Link href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/30 no-underline hover:bg-white/10 transition-colors">
            {sp.viewPricing}
          </Link>
        </div>
      </section>
    </>
  );
}
