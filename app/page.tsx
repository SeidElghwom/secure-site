"use client";
import Link from "next/link";
import {
  Shield, Fingerprint, ScanFace, AlertTriangle, Eye, TrendingUp,
  Search, Cpu, Zap, Activity, Lock, Globe, Wifi, ArrowRight,
  Building2, Landmark, ShieldCheck, Phone, ShoppingCart, Building,
  CheckCircle2, ChevronRight,
} from "lucide-react";
import { useLang } from "./lib/LangContext";

const GRAD = "linear-gradient(135deg,#0ea5e9,#14b8a6)";
const NAVY = "#0f1f35";

const SOL_ICONS = [Shield, ScanFace, Fingerprint, AlertTriangle, Eye, TrendingUp, Search, Cpu];
const SOL_GRADS = [
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#0ea5e9,#14b8a6)",
  "linear-gradient(135deg,#3b82f6,#1d4ed8)",
  "linear-gradient(135deg,#1e293b,#334155)",
  "linear-gradient(135deg,#06b6d4,#0891b2)",
  "linear-gradient(135deg,#10b981,#059669)",
  "linear-gradient(135deg,#3b82f6,#1d4ed8)",
  "linear-gradient(135deg,#10b981,#059669)",
];

const IND_ICONS = [Landmark, Building2, Building, ShieldCheck, Phone, ShoppingCart, Globe];
const IND_GRADS = [
  "linear-gradient(135deg,#1e3a5f,#2d6a8a)",
  "linear-gradient(135deg,#1e3a5f,#2d5a7a)",
  "linear-gradient(135deg,#0f4a2a,#1a6a3a)",
  "linear-gradient(135deg,#1a1a2e,#16213e)",
  "linear-gradient(135deg,#0f2a1a,#1a4a2a)",
  "linear-gradient(135deg,#1a1a0f,#2a2a10)",
  "linear-gradient(135deg,#0f1a2a,#1a2a3a)",
];

const ARCH_ICONS = [Globe, Shield, Cpu, Lock, Activity];

function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-8 lg:px-10 py-20"
      style={{ background: "linear-gradient(160deg,#0f1f35 0%,#0f2a45 55%,#1a3a5c 100%)" }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.35)", color: "#5eead4" }}>
            <Shield size={12} /> {h.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">{h.title}</h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-9 max-w-lg">{h.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl no-underline hover:opacity-90 transition-opacity"
              style={{ background: GRAD }}>
              {h.requestDemo} <ArrowRight size={14} />
            </Link>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl border border-white/30 no-underline hover:bg-white/10 transition-colors">
              {h.contactSales}
            </Link>
          </div>
        </div>

        {/* Dashboard card */}
        <div className="rounded-2xl p-5 sm:p-7"
          style={{ background: "rgba(15,26,51,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex items-center justify-between mb-5">
            <span className="text-slate-400 text-sm font-medium">{h.dashboard}</span>
            <Activity size={16} className="text-cyan-400" />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { val: "99.8%", label: h.kycAccuracy,    color: "#38bdf8" },
              { val: "2.3ms", label: h.responseTime,   color: "#38bdf8" },
              { val: "247",   label: h.threatsBlocked, color: "#34d399" },
              { val: "100%",  label: h.uptime,         color: "#34d399" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-3 sm:p-4"
                style={{ background: "rgba(15,31,53,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: "0 0 6px #34d399" }} />
              {h.monitoring}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
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
  const ICONS = [Zap, Activity, Lock, ShieldCheck, Globe];
  return (
    <section className="py-14 px-4 sm:px-8 lg:px-10 bg-white border-b border-slate-100">
      <h2 className="text-xl sm:text-2xl font-extrabold text-center text-slate-900 mb-10">{t.trusted.title}</h2>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-14 max-w-5xl mx-auto">
        {t.trusted.features.map((f, i) => {
          const Icon = ICONS[i];
          return (
            <div key={f} className="flex flex-col items-center gap-3 w-24 sm:w-28">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-md" style={{ background: GRAD }}>
                <Icon size={24} color="white" strokeWidth={1.8} />
              </div>
              <span className={`text-xs text-center leading-snug font-medium ${i < 2 ? "text-cyan-500" : "text-slate-500"}`}>{f}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SolutionsGrid() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{t.solutions.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">{t.solutions.subtitle}</p>
        </div>
        {/* 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.solutions.cards.map((c, i) => {
            const Icon = SOL_ICONS[i];
            return (
              <div key={c.label}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm" style={{ background: SOL_GRADS[i] }}>
                  <Icon size={22} color="white" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2">{c.label}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-2.5 rounded-xl no-underline hover:opacity-90 transition-opacity"
            style={{ background: GRAD }}>
            {t.solutions.viewAll} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{t.industries.title}</h2>
          <p className="text-slate-500 text-sm sm:text-base">{t.industries.subtitle}</p>
        </div>
        {/* 2 col on all sizes, first row 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {t.industries.items.slice(0,4).map((label, i) => {
            const Icon = IND_ICONS[i];
            return (
              <div key={label} className="relative h-36 sm:h-44 lg:h-48 rounded-2xl overflow-hidden cursor-pointer group">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: IND_GRADS[i] }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(5,15,30,0.88),transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center gap-2">
                  <Icon size={13} color="white" />
                  <span className="text-white font-semibold text-xs sm:text-sm">{label}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {t.industries.items.slice(4).map((label, i) => {
            const Icon = IND_ICONS[i + 4];
            return (
              <div key={label} className="relative h-36 sm:h-44 lg:h-48 rounded-2xl overflow-hidden cursor-pointer group">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: IND_GRADS[i + 4] }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(5,15,30,0.88),transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center gap-2">
                  <Icon size={13} color="white" />
                  <span className="text-white font-semibold text-xs sm:text-sm">{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10"
      style={{ background: "linear-gradient(160deg,#0f1f35 0%,#1a3a5c 55%,#3a6a8a 85%,#6ab0c0 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{t.architecture.title}</h2>
          <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-sm sm:text-base">{t.architecture.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {t.architecture.items.map((item, i) => {
            const Icon = ARCH_ICONS[i];
            return (
              <div key={item}
                className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl cursor-pointer transition-all hover:border-white/25"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: GRAD }}>
                    <Icon size={16} color="white" strokeWidth={1.8} />
                  </div>
                  <span className="text-white font-medium text-sm truncate">{item}</span>
                </div>
                <ChevronRight size={16} style={{ color: "rgba(255,255,255,0.35)" }} className="flex-shrink-0 ml-2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10" style={{ background: "#f8fafc" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{t.why.title}</h2>
          <p className="text-slate-500 text-sm">{t.why.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {t.why.items.map((item) => (
            <div key={item}
              className="bg-white border border-slate-100 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3 hover:border-cyan-100 hover:shadow-sm transition-all">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                <CheckCircle2 size={16} color="white" strokeWidth={2} />
              </div>
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStory() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl p-7 sm:p-10 lg:p-12"
          style={{ background: "linear-gradient(135deg,#38bdf8 0%,#0ea5e9 30%,#14b8a6 65%,#059669 100%)" }}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
            <Shield size={11} /> Success Story
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">SecureNova FinTech Security</h2>
          <p className="text-white/80 mb-2 text-sm sm:text-base">AI for Secure Mobile Payments</p>
          <div className="flex items-center gap-2 font-semibold text-white my-4 text-sm sm:text-base">
            🏆 AI Bridge Challenge 2025 Winner
          </div>
          <p className="text-white/70 text-sm mb-6">GIZ – I2COMSAPP</p>
          <button className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-slate-900 px-5 py-2.5 rounded-xl cursor-pointer border-none hover:-translate-y-0.5 transition-transform">
            Learn More <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 text-center" style={{ background: NAVY }}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">{t.cta.title}</h2>
      <p className="text-slate-400 max-w-md mx-auto mb-8 sm:mb-10 text-sm sm:text-base">{t.cta.subtitle}</p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <Link href="/pricing"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl no-underline hover:opacity-90 transition-opacity"
          style={{ background: GRAD }}>
          {t.cta.bookAssessment} <ArrowRight size={14} />
        </Link>
        <Link href="/pricing"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/30 no-underline hover:bg-white/10 transition-colors">
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
      <SuccessStory />
      <CTA />
    </>
  );
}
