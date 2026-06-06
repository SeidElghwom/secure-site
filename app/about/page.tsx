"use client";
import Link from "next/link";
import { useLang } from "../lib/LangContext";

const cardGrads = [
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#0ea5e9)",
  "linear-gradient(135deg,#0ea5e9,#1E40AF)",
  "linear-gradient(135deg,#059669,#14b8a6)",
];
const cardIcons = ["🛡","🎯","👥","🏅"];

const team = [
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
      <section className="py-28 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <h1 className="text-5xl font-extrabold text-white mb-4">{ap.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }}>{ap.subtitle}</p>
      </section>

      <section className="py-16 px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 leading-relaxed mb-5">{ap.p1}</p>
          <p className="text-slate-700 leading-relaxed">{ap.p2}</p>
        </div>
      </section>

      <section className="py-16 px-12" style={{ background: "#F4F7FA" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-5">
          {ap.cards.map((c, i) => (
            <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4"
                style={{ background: cardGrads[i] }}>
                {cardIcons[i]}
              </div>
              <h3 className="font-bold text-base mb-2">{c.title}</h3>
              <p className="text-sm text-slate-500">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold mb-2">{ap.teamTitle}</h2>
            <p className="text-slate-500">{ap.teamSubtitle}</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {team.map(m => (
              <div key={m.name} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
                  {m.init}
                </div>
                <div className="font-bold text-sm">{m.name}</div>
                <div className="text-xs text-slate-500 mt-1">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c,#2a4a6a 60%,#c5d8e8)" }}>
        <h2 className="text-4xl font-extrabold text-white mb-4">{ap.contactTitle}</h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">{ap.contactSubtitle}</p>
        <div className="flex justify-center gap-4">
          <Link href="/pricing"
            className="text-sm font-semibold text-white px-6 py-3 rounded-lg no-underline"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
            {ap.requestDemo}
          </Link>
          <Link href="/solutions"
            className="text-sm font-semibold text-slate-800 bg-white px-6 py-3 rounded-lg no-underline hover:bg-slate-100 transition-colors">
            {ap.viewSolutions}
          </Link>
        </div>
      </section>
    </>
  );
}
