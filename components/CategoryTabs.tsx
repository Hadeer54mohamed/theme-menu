"use client";

import { useRef } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import type { Category, Locale } from "@/lib/menuData";

interface Props {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryTabs({ categories, active, onChange }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locale = useLocale() as Locale;

  return (
    <div
      ref={scrollRef}
      className="flex gap-3 overflow-x-auto no-scrollbar pb-1"
      role="tablist"
      aria-label="Menu categories"
    >
      {categories.map((cat) => {
        const isActive = cat.id === active;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={`
              relative flex-shrink-0 flex items-center gap-2 px-5 py-2.5
              rounded-full text-sm font-semibold font-sans tracking-wide
              transition-all duration-300 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-burgundy-600
              ${
                isActive
                  ? "text-white shadow-btn"
                  : "text-stone-500 bg-white hover:bg-burgundy-50 hover:text-burgundy-800 shadow-card"
              }
            `}
          >
            {isActive && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-full btn-silk"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10 text-base leading-none">{cat.emoji}</span>
            <span className="relative z-10">{cat.label[locale]}</span>
          </button>
        );
      })}
    </div>
  );
}
