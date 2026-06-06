"use client";
import Link from "next/link";
import { useLang } from "../lib/LangContext";

const grads = [
  "linear-gradient(135deg,#1a3a5c,#0f2a45)",
  "linear-gradient(135deg,#0f2a45,#1a3a5c)",
  "linear-gradient(135deg,#0a2a20,#1a3a2c)",
  "linear-gradient(135deg,#0f1f35,#1a3a5c)",
  "linear-gradient(135deg,#0a2a20,#16322a)",
  "linear-gradient(135deg,#0f2a45,#2a1a30)",
  "linear-gradient(135deg,#0f2a45,#1a3a5c)",
];
const icons = ["🏛","🏢","🏛","🛡","📱","🛒","🌆"];

export default function IndustriesPage() {
  const { t } = useLang();
  const ip = t.industriesPage;

  return (
    <>
      <section className="py-28 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <h1 className="text-5xl font-extrabold text-white mb-4">{ip.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }}>{ip.subtitle}</p>
      </section>

      <section className="py-16 px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
          {ip.industries.map((ind, i) => (
            <div key={ind.label} className="rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0" style={{ background: grads[i] }} />
                <div className="absolute inset-0 flex items-end p-4"
                  style={{ background: "linear-gradient(to top,rgba(5,15,30,0.85),transparent)" }}>
                  <span className="text-white font-semibold text-lg flex items-center gap-2">
                    {icons[i]} {ind.label}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 mb-4">{ind.desc}</p>
                <div>
                  <p className="text-xs font-bold text-slate-800 mb-2">{ip.keySolutions}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-600 bg-slate-50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c,#2a4a6a 60%,#c5d8e8)" }}>
        <h2 className="text-4xl font-extrabold text-white mb-4">{t.cta.title}</h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">{t.cta.subtitle}</p>
        <div className="flex justify-center gap-4">
          <Link href="/pricing"
            className="text-sm font-semibold text-white px-6 py-3 rounded-lg no-underline"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
            {t.cta.bookAssessment}
          </Link>
          <Link href="/solutions"
            className="text-sm font-semibold text-slate-800 bg-white px-6 py-3 rounded-lg no-underline hover:bg-slate-100 transition-colors">
            {t.solutionsPage.viewPricing}
          </Link>
        </div>
      </section>
    </>
  );
}
