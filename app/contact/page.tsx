"use client";
import { useState } from "react";
import { useLang } from "../lib/LangContext";
import { Mail, Phone, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";

type ContactIconProps = {
  Icon: LucideIcon;
};
function ContactIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0"
      style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
      <Icon />
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
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 text-center"
        style={{ background: "linear-gradient(160deg,#0f1f35 0%,#0f2a45 55%,#1a3a5c 100%)" }}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">{c.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }} className="text-sm sm:text-base">{c.subtitle}</p>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12" style={{ background: "#F4F7FA" }}>
        {/* Stack on mobile, side-by-side on lg */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Form */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5 sm:mb-6">{c.sendTitle}</h2>
            {sent ? (
              <div className="rounded-2xl p-7 sm:p-8 flex items-center gap-4"
                style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.3)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>✓</div>
                <p className="text-slate-700 font-medium text-sm sm:text-base">{c.successMsg}</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col gap-4 sm:gap-5">
                {[
                  { key: "name", label: c.nameLabel, type: "text" },
                  { key: "company", label: c.companyLabel, type: "text" },
                  { key: "email", label: c.emailLabel, type: "email" },
                ].map(({ key, label, type }) => (
                  <div key={key} className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">{label}</label>
                    <input type={type} value={(form as any)[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      style={{ background: "#F4F7FA" }} />
                  </div>
                ))}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{c.messageLabel}</label>
                  <textarea rows={4} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={c.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    style={{ background: "#F4F7FA" }} />
                </div>
                <button onClick={handleSubmit}
                  className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}>
                  {c.sendBtn}
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5 sm:mb-6">{c.getInTouch}</h2>
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, title: c.emailTitle, values: c.emailValues },
                { icon: Phone, title: c.phoneTitle, values: c.phoneValues },
                { icon: MapPin, title: c.locationTitle, values: c.locationValues },
              ].map(({ icon: Icon, title, values }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 flex items-start gap-4"
                >
                  <ContactIcon Icon={Icon} />

                  <div>
                    <p className="font-bold text-slate-900 mb-1 text-sm sm:text-base">
                      {title}
                    </p>

                    {values.map((v) => (
                      <p key={v} className="text-xs sm:text-sm text-slate-500">
                        {v}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
