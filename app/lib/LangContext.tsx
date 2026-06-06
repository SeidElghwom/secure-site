"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations, Translations } from "./i18n";

type LangContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
  isRTL: boolean;
};

const LangContext = createContext<LangContextType>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
  isRTL: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("sn-locale") as Locale | null;
    if (saved && ["en", "fr", "ar"].includes(saved)) setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("sn-locale", l);
  };

  const isRTL = locale === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale, isRTL]);

  return (
    <LangContext.Provider value={{ locale, setLocale, t: translations[locale], isRTL }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
