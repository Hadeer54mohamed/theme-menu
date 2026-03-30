"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import type { Dish, Locale } from "@/lib/menuData";

interface Props {
  dish: Dish | null;
  onClose: () => void;
}

export default function DishModal({ dish, onClose }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations("menu");

  useEffect(() => {
    if (dish) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [dish]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {dish && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 modal-backdrop"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label={dish.name[locale]}
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed z-50 inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-0 md:mx-auto
                       md:w-[560px] bg-white rounded-3xl overflow-hidden shadow-modal flex flex-col"
          >
            <div className="relative h-64 flex-shrink-0 bg-burgundy-50">
              <Image
                src={dish.image}
                alt={dish.name[locale]}
                fill
                className="object-cover"
                sizes="560px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <button
                onClick={onClose}
                className="absolute top-4 end-4 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center
                           text-stone-700 hover:bg-white transition-colors shadow-sm"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {dish.badge && (
                <span
                  className="absolute top-4 start-4 text-[11px] font-sans font-700 px-3 py-1 rounded-full
                             bg-burgundy-900 text-white tracking-wider uppercase shadow-sm"
                >
                  {dish.badge[locale]}
                </span>
              )}

              <div className="absolute bottom-4 end-4 bg-white/95 backdrop-blur rounded-full px-4 py-1.5 shadow">
                <span className="font-serif font-700 text-burgundy-900 text-xl">
                  ${dish.price}
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-7">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="font-serif italic text-stone-900 text-2xl md:text-3xl font-700 leading-tight mb-3 text-balance"
              >
                {dish.name[locale]}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="font-sans text-stone-500 text-base leading-[1.7] mb-6"
              >
                {dish.description[locale]}
              </motion.p>

              <div className="w-12 h-0.5 bg-burgundy-200 rounded-full mb-6" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mb-5"
              >
                <h3 className="font-sans text-xs font-700 uppercase tracking-[0.12em] text-burgundy-700 mb-3">
                  {t("keyIngredients")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients[locale].map((ing) => (
                    <span
                      key={ing}
                      className="font-sans text-sm font-500 text-stone-700 bg-burgundy-50 px-3 py-1.5 rounded-full"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </motion.div>

              {dish.allergens[locale].length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="mb-6"
                >
                  <h3 className="font-sans text-xs font-700 uppercase tracking-[0.12em] text-amber-600 mb-3">
                    {t("allergens")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {dish.allergens[locale].map((a) => (
                      <span
                        key={a}
                        className="font-sans text-sm font-500 text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-6 border-t border-stone-50">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl border border-stone-200 font-sans font-600 text-stone-600
                           hover:bg-stone-50 transition-colors text-sm"
              >
                {t("backToMenu")}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
