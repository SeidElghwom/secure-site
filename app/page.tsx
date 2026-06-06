"use client";
import Link from "next/link";
import { useLang } from "./lib/LangContext";

function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="min-h-screen flex items-center px-12 py-20"
      style={{ background: "linear-gradient(160deg,#0f1f35 0%,#0f2a45 55%,#1a3a5c 100%)" }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(20,184,166,0.2)", border: "1px solid rgba(20,184,166,0.4)", color: "#14b8a6" }}>
            {h.badge}
          </span>
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-5">{h.title}</h1>
          <p className="text-slate-400 text-base leading-relaxed mb-9 max-w-lg">{h.subtitle}</p>
          <div className="flex gap-4">
            <Link href="/pricing"
              className="flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-lg no-underline"
              style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
              {h.requestDemo}
            </Link>
            <Link href="/about"
              className="flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-lg border-2 border-white no-underline hover:bg-white/10 transition-colors">
              {h.contactSales}
            </Link>
          </div>
        </div>
        <div className="rounded-2xl p-7"
          style={{ background: "rgba(15,26,51,0.8)", border: "1px solid rgba(255,255,255,.12)" }}>
          <div className="flex items-center justify-between text-slate-400 text-sm mb-5">
            <span>{h.dashboard}</span>
            <span className="text-cyan-400">〜</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { val: "99.8%", label: h.kycAccuracy, color: "#14b8a6" },
              { val: "2.3ms", label: h.responseTime, color: "#14b8a6" },
              { val: "247",   label: h.threatsBlocked, color: "#14b8a6" },
              { val: "100%",  label: h.uptime, color: "#34d399" },
            ].map(s => (
              <div key={s.label} className="rounded-xl p-4"
                style={{ background: "rgba(15,31,53,0.6)", border: "1px solid rgba(255,255,255,.08)" }}>
                <div className="text-2xl font-extrabold" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              {h.monitoring}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              {h.aiModels}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trusted() {
  const { t } = useLang();
  const icons = ["⚡","〜","🔒","🛡","🌐"];
  return (
    <section className="py-16 px-12 border-b border-slate-100">
      <h2 className="text-2xl font-extrabold text-center mb-10 text-slate-900">{t.trusted.title}</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {t.trusted.features.map((f, i) => (
          <div key={f} className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
              style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
              {icons[i]}
            </div>
            <span className="text-xs text-slate-500 text-center max-w-28">{f}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SolutionsGrid() {
  const { t } = useLang();
  const grads = [
    "linear-gradient(135deg,#0ea5e9,#14b8a6)",
    "linear-gradient(135deg,#0ea5e9,#14b8a6)",
    "linear-gradient(135deg,#0ea5e9,#1E40AF)",
    "linear-gradient(135deg,#059669,#14b8a6)",
    "linear-gradient(135deg,#0ea5e9,#14b8a6)",
    "linear-gradient(135deg,#D97706,#EA580C)",
    "linear-gradient(135deg,#0ea5e9,#1E40AF)",
    "linear-gradient(135deg,#059669,#14b8a6)",
  ];
  const icons = ["🛡","📄","👆","⚠","👁","📈","🔍","📡"];
  return (
    <section className="py-20 px-12" style={{ background: "#F4F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">{t.solutions.title}</h2>
          <p className="text-slate-500">{t.solutions.subtitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {t.solutions.cards.map((c, i) => (
            <div key={c.label}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <div className="w-13 h-13 rounded-xl flex items-center justify-center text-white text-2xl mb-5"
                style={{ background: grads[i], width: 52, height: 52 }}>
                {icons[i]}
              </div>
              <h3 className="font-bold text-base mb-2">{c.label}</h3>
              <p className="text-sm text-slate-500">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-2.5 rounded-lg no-underline"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
            {t.solutions.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const { t } = useLang();
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
  return (
    <section className="py-20 px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">{t.industries.title}</h2>
          <p className="text-slate-500">{t.industries.subtitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {t.industries.items.slice(0,4).map((label, i) => (
            <div key={label} className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group">
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                style={{ background: grads[i] }} />
              <div className="absolute inset-0 flex items-end p-4"
                style={{ background: "linear-gradient(to top,rgba(5,15,30,0.85),transparent)" }}>
                <span className="text-white font-semibold flex items-center gap-2">
                  {icons[i]} {label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {t.industries.items.slice(4).map((label, i) => (
            <div key={label} className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group">
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                style={{ background: grads[i+4] }} />
              <div className="absolute inset-0 flex items-end p-4"
                style={{ background: "linear-gradient(to top,rgba(5,15,30,0.85),transparent)" }}>
                <span className="text-white font-semibold flex items-center gap-2">
                  {icons[i+4]} {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const { t } = useLang();
  const icons = ["🌐","🛡","📡","🔒","〜"];
  return (
    <section className="py-20 px-12" style={{ background: "linear-gradient(160deg,#1a3a5c,#2a4a6a)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-3">{t.architecture.title}</h2>
          <p style={{ color: "rgba(255,255,255,.6)" }}>{t.architecture.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {t.architecture.items.map((item, i) => (
            <div key={item}
              className="flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer transition-all"
              style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)", minWidth: 40 }}>
                  {icons[i]}
                </div>
                <span className="text-white font-medium">{item}</span>
              </div>
              <span style={{ color: "rgba(255,255,255,.4)" }}>›</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useLang();
  return (
    <section className="py-20 px-12" style={{ background: "#F4F7FA" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-2">{t.why.title}</h2>
          <p className="text-slate-500">{t.why.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {t.why.items.map(i => (
            <div key={i} className="bg-white border border-slate-100 rounded-xl px-5 py-4 flex items-center gap-3 font-medium text-sm">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "#34d399" }}>✓</div>
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useLang();
  return (
    <section className="py-20 px-12 text-center" style={{ background: "#0f1f35" }}>
      <h2 className="text-4xl font-extrabold text-white mb-4">{t.cta.title}</h2>
      <p className="text-slate-400 text-base mb-10 max-w-md mx-auto">{t.cta.subtitle}</p>
      <div className="flex justify-center gap-4">
        <Link href="/pricing"
          className="flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-lg no-underline"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
          {t.cta.bookAssessment}
        </Link>
        <Link href="/pricing"
          className="flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-lg border-2 border-white no-underline hover:bg-white/10 transition-colors">
          {t.cta.viewPricing}
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <SolutionsGrid />
      <Industries />
      <Architecture />
      <Why />
      <CTA />
    </>
  );
}
