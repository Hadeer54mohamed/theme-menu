"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { Dish, Locale } from "@/lib/menuData";

interface Props {
  dish: Dish;
  index: number;
  onClick: (dish: Dish) => void;
}

const badgeColors: Record<string, string> = {
  "Chef's Pick": "bg-burgundy-900 text-white",
  "اختيار الشيف": "bg-burgundy-900 text-white",
  Seasonal: "bg-amber-100 text-amber-800",
  "موسمي": "bg-amber-100 text-amber-800",
  Signature: "bg-stone-900 text-white",
  "مميز": "bg-stone-900 text-white",
  Vegan: "bg-burgundy-100 text-burgundy-800",
  "نباتي": "bg-burgundy-100 text-burgundy-800",
  Sustainable: "bg-teal-100 text-teal-800",
  "مستدام": "bg-teal-100 text-teal-800",
  Premium: "bg-yellow-50 text-yellow-700",
  "فاخر": "bg-yellow-50 text-yellow-700",
  "Non-Alcoholic": "bg-sky-100 text-sky-700",
  "بدون كحول": "bg-sky-100 text-sky-700",
  "House Blend": "bg-burgundy-50 text-burgundy-700",
  "خلطة المنزل": "bg-burgundy-50 text-burgundy-700",
};

export default function MenuCard({ dish, index, onClick }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations("menu");
  const badgeText = dish.badge?.[locale];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="menu-card bg-white rounded-2xl overflow-hidden shadow-card cursor-pointer group"
      onClick={() => onClick(dish)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(dish)}
      aria-label={dish.name[locale]}
    >
      <div className="relative h-52 overflow-hidden bg-burgundy-50">
        <Image
          src={dish.image}
          alt={dish.name[locale]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover img-zoom"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nGNgYGD4z8BQ/5+Bof4/A0P9fwaG+v8MDPX/GRjq/zMw1P9nYKj/z8BQ/x8AUEsHCEAAAAAAAAAAAAAAAAA="
        />
        {badgeText && (
          <span
            className={`absolute top-3 start-3 text-[11px] font-sans font-700 px-2.5 py-1
              rounded-full tracking-wider uppercase
              ${badgeColors[badgeText] ?? "bg-white/90 text-stone-700"}`}
          >
            {badgeText}
          </span>
        )}
        <div className="absolute bottom-3 end-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
          <span className="font-sans font-700 text-burgundy-900 text-sm">${dish.price}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif font-700 text-stone-900 text-lg leading-tight mb-2 group-hover:text-burgundy-900 transition-colors duration-200">
          {dish.name[locale]}
        </h3>
        <p className="font-sans text-stone-500 text-sm leading-relaxed line-clamp-2">
          {dish.description[locale]}
        </p>

        {dish.allergens[locale].length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {dish.allergens[locale].slice(0, 3).map((a) => (
              <span
                key={a}
                className="text-[10px] font-sans font-500 text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full uppercase tracking-wide"
              >
                {a}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-50">
          <span className="font-sans text-xs text-burgundy-700 font-600 tracking-wide uppercase">
            {t("viewDetails")}
          </span>
          <div className="w-7 h-7 rounded-full btn-silk flex items-center justify-center shadow-btn group-hover:scale-110 transition-transform duration-200">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
