"use client";
import { useState } from "react";
import { useLang } from "../lib/LangContext";
export default function DemoPage() {
  const { t } = useLang();
  const d = t.demoPage;

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    company: "", country: "", industry: "", interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.company || !form.country || !form.industry || !form.interest) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="py-28 px-12 text-center"
        style={{ background: "linear-gradient(160deg,#0f1f35 0%,#0f2a45 55%,#1a3a5c 100%)" }}
      >
        {/* Shield icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
              fill="white"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-white mb-4">{d.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)" }} className="text-base">
          {d.subtitle}
        </p>
      </section>

      {/* Form */}
      <section className="py-16 px-12" style={{ background: "#F4F7FA" }}>
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div
              className="bg-white rounded-2xl p-12 text-center border border-slate-100"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
              >
                ✓
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">{d.successMsg}</h2>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 border border-slate-100">
              <div className="flex flex-col gap-5">
                {/* First + Last Name */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">{d.firstNameLabel}</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      style={{ background: "#F4F7FA" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">{d.lastNameLabel}</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      style={{ background: "#F4F7FA" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{d.emailLabel}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    style={{ background: "#F4F7FA" }}
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{d.companyLabel}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    style={{ background: "#F4F7FA" }}
                  />
                </div>

                {/* Country */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{d.countryLabel}</label>
                  <div className="relative">
                    <select
                      value={form.country}
                      onChange={e => setForm({ ...form, country: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                      style={{ background: "#F4F7FA" }}
                    >
                      <option value="">{d.countryPlaceholder}</option>
                      {d.countries.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                      ▾
                    </div>
                  </div>
                </div>

                {/* Industry */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{d.industryLabel}</label>
                  <div className="relative">
                    <select
                      value={form.industry}
                      onChange={e => setForm({ ...form, industry: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                      style={{ background: "#F4F7FA" }}
                    >
                      <option value="">{d.industryPlaceholder}</option>
                      {d.industries.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                      ▾
                    </div>
                  </div>
                </div>

                {/* Interest */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">{d.interestLabel}</label>
                  <textarea
                    rows={4}
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    placeholder={d.interestPlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    style={{ background: "#F4F7FA" }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer mt-2"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#14b8a6)" }}
                >
                  {d.submitBtn}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
