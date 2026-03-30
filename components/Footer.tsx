"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-stone-100 py-12 bg-white" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full btn-silk flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C12 3 7 8 7 13a5 5 0 0010 0c0-5-5-10-5-10z"
                fill="white"
                fillOpacity=".9"
              />
              <path d="M12 13v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif italic text-burgundy-900 text-lg font-700">
            {t("brand")}
          </span>
        </div>
        <p className="font-sans text-xs text-stone-400 tracking-wide text-center">
          {t("address")}
        </p>
        <p className="font-sans text-xs text-stone-400">{t("copyright")}</p>
      </div>
    </footer>
  );
}
