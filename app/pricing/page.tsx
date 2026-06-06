"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "../lib/LangContext";

const planIcons = ["⚡","📊","👑"];
const planPopular = [false, true, false];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLang();
  const pp = t.pricingPage;

  return (
    <>
      <section className="py-28 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <h1 className="text-5xl font-extrabold text-white mb-4">{pp.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }}>{pp.subtitle}</p>
      </section>

      <section className="py-16 px-12" style={{ background: "#F4F7FA" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
          {pp.plans.map((p, i) => (
            <div key={p.name}
              className={`bg-white rounded-2xl p-8 border transition-all hover:shadow-lg ${planPopular[i] ? "border-cyan-400 shadow-lg relative" : "border-slate-100"}`}>
              {planPopular[i] && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold text-white px-3 py-1 rounded-full"
                    style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
                    {pp.popular}
                  </span>
                </div>
              )}
              <div className="text-3xl mb-4">{planIcons[i]}</div>
              <h3 className="text-xl font-extrabold mb-1">{p.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{p.sub}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                {p.price !== "Custom" && p.price !== "Sur devis" && p.price !== "حسب الطلب" && (
                  <span className="text-slate-500 text-sm ml-1">{pp.currency}</span>
                )}
              </div>
              <Link href="/about"
                className="block text-center text-sm font-semibold py-2.5 rounded-lg mb-7 no-underline transition-colors"
                style={planPopular[i]
                  ? { background: "linear-gradient(135deg,#0ea5e9,#14b8a6)", color: "#fff" }
                  : { background: "#0f172a", color: "#fff" }}>
                {p.cta}
              </Link>
              <ul className="flex flex-col gap-2.5">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-cyan-500 mt-0.5 flex-shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8">{pp.faqTitle}</h2>
          <div className="flex flex-col gap-3">
            {pp.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-left hover:bg-slate-50 transition-colors cursor-pointer">
                  {faq.q}
                  <span className={`transition-transform text-cyan-500 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-slate-600 border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c,#2a4a6a 60%,#c5d8e8)" }}>
        <h2 className="text-4xl font-extrabold text-white mb-4">{pp.ctaTitle}</h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">{pp.ctaSubtitle}</p>
        <div className="flex justify-center gap-4">
          <Link href="/about"
            className="text-sm font-semibold text-white px-6 py-3 rounded-lg no-underline"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
            {pp.requestDemo}
          </Link>
          <Link href="/about"
            className="text-sm font-semibold text-slate-800 bg-white px-6 py-3 rounded-lg no-underline hover:bg-slate-100 transition-colors">
            {pp.contactSales}
          </Link>
        </div>
      </section>
    </>
  );
}
