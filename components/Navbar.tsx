"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    router.refresh();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 glass-nav transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
          <div className="w-8 h-8 rounded-full btn-silk flex items-center justify-center shadow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C12 3 7 8 7 13a5 5 0 0010 0c0-5-5-10-5-10z"
                fill="white"
                fillOpacity=".9"
              />
              <path d="M12 13v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif italic text-burgundy-900 text-xl font-700 tracking-tight">
            {t("brand")}
          </span>
        </Link>

        <button
          onClick={toggleLocale}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-burgundy-200
                     text-burgundy-800 font-sans text-sm font-600 hover:bg-burgundy-50
                     transition-colors duration-200"
          aria-label="Switch language"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          {t("switchLang")}
        </button>
      </div>
    </header>
  );
}
