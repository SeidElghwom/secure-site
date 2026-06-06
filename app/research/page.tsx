"use client";
import Link from "next/link";
import { useLang } from "../lib/LangContext";

const areaGrads = [
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#0ea5e9)",
  "linear-gradient(135deg,#0ea5e9,#1E40AF)",
  "linear-gradient(135deg,#059669,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
];
const areaIcons = ["🧠","🛡","📡","🏅","🌾","💬"];

export default function ResearchPage() {
  const { t } = useLang();
  const rp = t.researchPage;

  return (
    <>
      <section className="py-28 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <span className="inline-block text-xs font-semibold text-white px-3 py-1.5 rounded-full mb-5"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
          {rp.badge}
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-4">{rp.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }}>{rp.subtitle}</p>
      </section>

      <section className="py-16 px-12" style={{ background: "#F4F7FA" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-2">{rp.areasTitle}</h2>
            <p className="text-slate-500">{rp.areasSubtitle}</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {rp.areas.map((a, i) => (
              <div key={a.name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-4"
                  style={{ background: areaGrads[i] }}>
                  {areaIcons[i]}
                </div>
                <h3 className="font-bold text-base mb-2">{a.name}</h3>
                <p className="text-sm text-slate-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-10"
            style={{ background: "linear-gradient(135deg,#14b8a6,#0ea5e9 60%,#0ea5e9)" }}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              🏆 {rp.awardTitle}
            </h2>
            <p className="text-white font-semibold mb-2">{rp.awardSubtitle}</p>
            <p className="text-white/70 text-sm mb-4">GIZ – I2COMSAPP</p>
            <p className="text-white/80 text-sm leading-relaxed">{rp.awardBody}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-12 text-center" style={{ background: "#0f1f35" }}>
        <h2 className="text-3xl font-extrabold text-white mb-4">{rp.ctaTitle}</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">{rp.ctaSubtitle}</p>
        <div className="flex justify-center gap-4">
          <Link href="/about"
            className="text-sm font-semibold text-white px-6 py-3 rounded-lg no-underline inline-flex items-center gap-2"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
            {rp.contactUs}
          </Link>
          <Link href="/solutions"
            className="text-sm font-semibold text-white px-6 py-3 rounded-lg no-underline border-2 border-white hover:bg-white/10 transition-colors">
            {rp.viewSolutions}
          </Link>
        </div>
      </section>
    </>
  );
}
