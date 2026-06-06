"use client";
import Link from "next/link";
import { useLang } from "../lib/LangContext";

const iconMap = ["🛡","📄","👆","⚠","👁","📈","🔍","📡"];
const gradMap = [
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#1E40AF)",
  "linear-gradient(135deg,#059669,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#D97706,#EA580C)",
  "linear-gradient(135deg,#0ea5e9,#1E40AF)",
  "linear-gradient(135deg,#059669,#14b8a6)",
  "linear-gradient(135deg,#059669,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#0ea5e9)",
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#1E40AF)",
  "linear-gradient(135deg,#059669,#14b8a6)",
];
const groupIcons = [
  ["🛡","📄","👆","⚠"],
  ["👁","📈","🔍"],
  ["🔗","☁","🔒"],
  ["📡","📱"],
];

export default function SolutionsPage() {
  const { t } = useLang();
  const sp = t.solutionsPage;

  return (
    <>
      <section className="py-28 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <h1 className="text-5xl font-extrabold text-white mb-4">{sp.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }}>{sp.subtitle}</p>
      </section>

      {sp.groups.map((g, gi) => (
        <section key={g.title} className="py-16 px-12"
          style={{ background: gi % 2 === 1 ? "#F4F7FA" : "#ffffff" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold text-white px-3 py-1.5 rounded-full mb-3"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
                {g.badge}
              </span>
              <h2 className="text-3xl font-extrabold mb-2">{g.title}</h2>
              <p className="text-slate-500">{g.subtitle}</p>
            </div>
            <div className={`grid gap-5 ${g.cards.length === 4 ? "grid-cols-4" : g.cards.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
              {g.cards.map((c, ci) => (
                <div key={c.name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white mb-5"
                    style={{ background: groupIcons[gi] ? gradMap[gi * 4 + ci] || gradMap[0] : gradMap[0] }}>
                    {groupIcons[gi]?.[ci] || "🔒"}
                  </div>
                  <h3 className="font-bold text-base mb-2">{c.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{c.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {c.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-cyan-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c,#2a4a6a 60%,#c5d8e8)" }}>
        <h2 className="text-4xl font-extrabold text-white mb-4">{sp.ctaTitle}</h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">{sp.ctaSubtitle}</p>
        <div className="flex justify-center gap-4">
          <Link href="/pricing"
            className="text-sm font-semibold text-white px-6 py-3 rounded-lg no-underline flex items-center gap-2"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
            {sp.requestDemo}
          </Link>
          <Link href="/pricing"
            className="text-sm font-semibold text-slate-800 bg-white px-6 py-3 rounded-lg no-underline hover:bg-slate-100 transition-colors">
            {sp.viewPricing}
          </Link>
        </div>
      </section>
    </>
  );
}
