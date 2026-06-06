"use client";
import { useState } from "react";
import { useLang } from "../lib/LangContext";
import { Phone, MapPin, Mail } from "lucide-react";
function ContactIcon({ icon }: { icon: string }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0"
      style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
    >
      {icon}
    </div>
  );
}

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contactPage;

  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="py-28 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#0f1f35 0%,#0f2a45 55%,#1a3a5c 100%)" }}
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">{c.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }} className="text-base">
          {c.subtitle}
        </p>
      </section>

      {/* Main content */}
      <section className="py-16 px-12" style={{ background: "#F4F7FA" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{c.sendTitle}</h2>
            {sent ? (
              <div
                className="rounded-2xl p-8 flex items-center gap-4"
                style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.3)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
                >
                  ✓
                </div>
                <p className="text-slate-700 font-medium">{c.successMsg}</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 border border-slate-100 flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{c.nameLabel}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    style={{ background: "#F4F7FA" }}
                  />
                </div>
                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{c.companyLabel}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    style={{ background: "#F4F7FA" }}
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{c.emailLabel}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    style={{ background: "#F4F7FA" }}
                  />
                </div>
                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{c.messageLabel}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={c.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    style={{ background: "#F4F7FA" }}
                  />
                </div>
                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
                >
                  {c.sendBtn}
                </button>
              </div>
            )}
          </div>

          {/* Right: Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{c.getInTouch}</h2>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">{c.emailTitle}</p>
                  {c.emailValues.map(v => (
                    <p key={v} className="text-sm text-slate-500">{v}</p>
                  ))}
                </div>
              </div>
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">{c.phoneTitle}</p>
                  {c.phoneValues.map(v => (
                    <p key={v} className="text-sm text-slate-500">{v}</p>
                  ))}
                </div>
              </div>
              {/* Location */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">{c.locationTitle}</p>
                  {c.locationValues.map(v => (
                    <p key={v} className="text-sm text-slate-500">{v}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
