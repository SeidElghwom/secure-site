"use client";
import Link from "next/link";
import { useState } from "react";
import { Zap, BarChart2, Crown, Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useLang } from "../lib/LangContext";

const GRAD = "linear-gradient(135deg,#0ea5e9,#14b8a6)";
const PLAN_ICONS = [Zap, BarChart2, Crown];
const PLAN_POPULAR = [false, true, false];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLang();
  const pp = t.pricingPage;
  const isCustom = (p: string) => ["Custom", "Sur devis", "حسب الطلب"].includes(p);

  return (
    <>
      {/* Hero */}
      <section
        className="py-28 px-10 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}
      >
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">{pp.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.7)" }}>{pp.subtitle}</p>
      </section>

      {/* Plans */}
      <section className="py-16 px-10" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {pp.plans.map((p, i) => {
            const Icon = PLAN_ICONS[i];
            const popular = PLAN_POPULAR[i];
            return (
              <div
                key={p.name}
                className={`bg-white rounded-2xl p-8 border transition-all hover:shadow-xl relative ${
                  popular ? "border-cyan-400 shadow-lg" : "border-slate-100"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="text-xs font-bold text-white px-4 py-1.5 rounded-full"
                      style={{ background: GRAD }}
                    >
                      {pp.popular}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ background: popular ? GRAD : "linear-gradient(135deg,#334155,#475569)" }}
                >
                  <Icon size={22} color="white" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{p.sub}</p>

                {/* Price */}
                <div className="mb-6">
                  {isCustom(p.price) ? (
                    <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-slate-900">{p.price}</span>
                      <span className="text-slate-400 text-sm ml-1.5">{pp.currency}</span>
                    </>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="/about"
                  className="block text-center text-sm font-semibold py-2.5 rounded-xl mb-8 no-underline transition-opacity hover:opacity-90"
                  style={
                    popular
                      ? { background: GRAD, color: "#fff" }
                      : { background: "#0f172a", color: "#fff" }
                  }
                >
                  {p.cta}
                </Link>

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={14} className="text-cyan-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">{pp.faqTitle}</h2>
          <div className="flex flex-col gap-3">
            {pp.faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-slate-900 text-sm">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-cyan-500 flex-shrink-0" />
                    : <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-10 text-center" style={{ background: "#0f1f35" }}>
        <h2 className="text-3xl font-extrabold text-white mb-3">{pp.ctaTitle}</h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto">{pp.ctaSubtitle}</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl no-underline hover:opacity-90 transition-opacity"
            style={{ background: GRAD }}
          >
            {pp.requestDemo} <ArrowRight size={14} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl border border-white/30 no-underline hover:bg-white/10 transition-colors"
          >
            {pp.contactSales}
          </Link>
        </div>
      </section>
    </>
  );
}
