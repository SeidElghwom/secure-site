"use client";
import Link from "next/link";
import { Brain, Shield, Wifi, Award, Leaf, MessageSquare, Trophy, ArrowRight } from "lucide-react";
import { useLang } from "../lib/LangContext";

const GRAD = "linear-gradient(135deg,#0ea5e9,#14b8a6)";
const AREA_ICONS = [Brain, Shield, Wifi, Award, Leaf, MessageSquare];
const AREA_GRADS = [
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#3b82f6,#1d4ed8)",
  "linear-gradient(135deg,#0ea5e9,#0891b2)",
  "linear-gradient(135deg,#10b981,#059669)",
  "linear-gradient(135deg,#10b981,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
];

export default function ResearchPage() {
  const { t } = useLang();
  const rp = t.researchPage;
  return (
    <>
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-white px-3.5 py-1.5 rounded-full mb-6" style={{ background: GRAD }}>
          <Shield size={11} /> {rp.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">{rp.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.7)" }} className="max-w-xl mx-auto text-sm sm:text-base">{rp.subtitle}</p>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-10" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{rp.areasTitle}</h2>
            <p className="text-slate-500 text-sm sm:text-base">{rp.areasSubtitle}</p>
          </div>
          {/* 1 → 2 → 3 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {rp.areas.map((a, i) => {
              const Icon = AREA_ICONS[i];
              return (
                <div key={a.name}
                  className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-sm" style={{ background: AREA_GRADS[i] }}>
                    <Icon size={22} color="white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2">{a.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-7 sm:p-10 lg:p-12"
            style={{ background: "linear-gradient(135deg,#38bdf8 0%,#0ea5e9 35%,#14b8a6 70%,#059669 100%)" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Trophy size={20} color="white" strokeWidth={1.8} />
              </div>
              <span className="text-white font-bold text-base sm:text-lg">{rp.awardTitle}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">{rp.awardSubtitle}</h2>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">{rp.awardBody}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 text-center" style={{ background: "#0f1f35" }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{rp.ctaTitle}</h2>
        <p className="text-slate-400 mb-8 sm:mb-10 max-w-md mx-auto text-sm sm:text-base">{rp.ctaSubtitle}</p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl no-underline hover:opacity-90 transition-opacity"
            style={{ background: GRAD }}>
            {rp.contactUs} <ArrowRight size={14} />
          </Link>
          <Link href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/30 no-underline hover:bg-white/10 transition-colors">
            {rp.viewSolutions}
          </Link>
        </div>
      </section>
    </>
  );
}
