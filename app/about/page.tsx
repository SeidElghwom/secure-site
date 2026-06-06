"use client";
import Link from "next/link";
import { Shield, Target, Users, Medal, ArrowRight } from "lucide-react";
import { useLang } from "../lib/LangContext";

const GRAD = "linear-gradient(135deg,#0ea5e9,#14b8a6)";
const CARD_ICONS = [Shield, Target, Users, Medal];
const CARD_GRADS = [
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#3b82f6,#0ea5e9)",
  "linear-gradient(135deg,#10b981,#14b8a6)",
  "linear-gradient(135deg,#f59e0b,#ef4444)",
];

const TEAM = [
  { name: "Sidi Ahmed", role: "CEO & Co-founder", init: "SA" },
  { name: "Mariem Ould", role: "CTO & AI Lead", init: "MO" },
  { name: "Ibrahima Diallo", role: "Head of Security", init: "ID" },
  { name: "Fatima Mint", role: "Product Manager", init: "FM" },
];

export default function AboutPage() {
  const { t } = useLang();
  const ap = t.aboutPage;

  return (
    <>
      {/* Hero */}
      <section
        className="py-28 px-10 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}
      >
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">{ap.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.7)" }} className="max-w-xl mx-auto">{ap.subtitle}</p>
      </section>

      {/* About text */}
      <section className="py-16 px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 leading-relaxed mb-5 text-base">{ap.p1}</p>
          <p className="text-slate-700 leading-relaxed text-base">{ap.p2}</p>
        </div>
      </section>

      {/* Mission / Vision / Values / Achievement */}
      <section className="py-16 px-10" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-5">
          {ap.cards.map((c, i) => {
            const Icon = CARD_ICONS[i];
            return (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ background: CARD_GRADS[i] }}
                >
                  <Icon size={22} color="white" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-3">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-16 px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{ap.teamTitle}</h2>
            <p className="text-slate-500">{ap.teamSubtitle}</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center group cursor-pointer">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md group-hover:-translate-y-1 transition-transform"
                  style={{ background: GRAD }}
                >
                  {m.init}
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{m.name}</h4>
                <p className="text-xs text-slate-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 px-10 text-center" style={{ background: "#0f1f35" }}>
        <h2 className="text-3xl font-extrabold text-white mb-3">{ap.contactTitle}</h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto">{ap.contactSubtitle}</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl no-underline hover:opacity-90 transition-opacity"
            style={{ background: GRAD }}
          >
            {ap.requestDemo} <ArrowRight size={14} />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl border border-white/30 no-underline hover:bg-white/10 transition-colors"
          >
            {ap.viewSolutions}
          </Link>
        </div>
      </section>
    </>
  );
}
