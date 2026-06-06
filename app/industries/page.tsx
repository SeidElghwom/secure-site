"use client";
import Link from "next/link";
import { Landmark, Building2, Building, ShieldCheck, Phone, ShoppingCart, Globe, Tag } from "lucide-react";
import { useLang } from "../lib/LangContext";

const GRAD = "linear-gradient(135deg,#0ea5e9,#14b8a6)";
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

export default function IndustriesPage() {
  const { t } = useLang();
  const ip = t.industriesPage;
  return (
    <>
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 text-center"
        style={{ background: "linear-gradient(160deg,#1a3a5c 0%,#2a4a6a 60%,#c5d8e8 100%)" }}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">{ip.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.7)" }} className="max-w-xl mx-auto text-sm sm:text-base">{ip.subtitle}</p>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
          {ip.industries.map((ind, i) => {
            const Icon = IND_ICONS[i];
            return (
              <div key={ind.label}
                className="rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: IND_GRADS[i] }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(5,15,30,0.88),transparent 60%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center gap-3">
                    <Icon size={17} color="white" strokeWidth={1.8} />
                    <span className="text-white font-bold text-base sm:text-lg">{ind.label}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{ind.desc}</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{ip.keySolutions}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.tags.map((tag) => (
                      <span key={tag}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(14,165,233,0.08)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.2)" }}>
                        <Tag size={9} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
