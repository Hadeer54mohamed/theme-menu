"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-stone-100 py-6 bg-white" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full btn-silk flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C12 3 7 8 7 13a5 5 0 0010 0c0-5-5-10-5-10z"
                fill="white"
                fillOpacity=".9"
              />
              <path d="M12 13v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif italic text-burgundy-900 text-sm font-700">
            {t("brand")}
          </span>
        </div>

        <p className="font-sans text-xs text-stone-400">{t("copyright")}</p>

        <p dir="ltr" className="font-sans text-xs text-stone-400 flex items-center gap-1">
          {t("madeBy")}{" "}
          <a
            href="https://www.facebook.com/ENSEGYPTEG"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#4c1121] hover:underline transition-colors"
          >
            ENS
          </a>
        </p>
      </div>
    </footer>
  );
}
