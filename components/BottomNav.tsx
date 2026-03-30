"use client";

import { useLocale } from "next-intl";
import { useMenuContext } from "./MenuProvider";
import { categories } from "@/lib/menuData";
import type { Locale } from "@/lib/menuData";

export default function BottomNav() {
  const locale = useLocale() as Locale;
  const { activeCategory, setActiveCategory } = useMenuContext();

  const handleClick = (id: string) => {
    setActiveCategory(id);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bottom-nav px-2 pb-safe"
      aria-label="Categories"
    >
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5 px-1">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`
                flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full
                text-xs font-semibold font-sans transition-all duration-200
                ${
                  isActive
                    ? "btn-silk text-white shadow-btn"
                    : "text-stone-500 hover:bg-burgundy-50 hover:text-burgundy-800"
                }
              `}
            >
              <span className="text-sm leading-none">{cat.emoji}</span>
              <span>{cat.label[locale]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
