"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import CategoryTabs from "./CategoryTabs";
import MenuCard from "./MenuCard";
import DishModal from "./DishModal";
import { useMenuContext } from "./MenuProvider";
import type { Dish, Category, Locale } from "@/lib/menuData";

interface Props {
  dishes: Dish[];
  categories: Category[];
}

export default function MenuSection({ dishes, categories }: Props) {
  const { activeCategory, setActiveCategory } = useMenuContext();
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const locale = useLocale() as Locale;
  const t = useTranslations("menu");

  const filtered =
    activeCategory === "all"
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  return (
    <>
      <div className="mb-10">
        <p className="font-sans text-xs font-600 tracking-[0.18em] uppercase text-burgundy-600 mb-3">
          {t("subtitle")}
        </p>
        <h2
          id="menu-heading"
          className="font-serif italic text-stone-900 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight"
        >
          {t("title")}
        </h2>
      </div>

      <div className="hidden md:block mb-12">
        <CategoryTabs
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={activeCategory + "-count"}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="font-sans text-sm text-stone-400 mb-8 font-500"
        >
          {filtered.length} {filtered.length === 1 ? t("dish") : t("dishes")}
          {activeCategory !== "all" && (
            <>
              {" "}
              {t("in")}{" "}
              <span className="text-burgundy-700">
                {categories.find((c) => c.id === activeCategory)?.label[locale]}
              </span>
            </>
          )}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {filtered.map((dish, i) => (
            <MenuCard key={dish.id} dish={dish} index={i} onClick={setSelectedDish} />
          ))}
        </motion.div>
      </AnimatePresence>

      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </>
  );
}
