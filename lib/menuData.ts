export type Locale = "en" | "ar";

export type Bilingual = { en: string; ar: string };
export type BilingualArray = { en: string[]; ar: string[] };

export type Dish = {
  id: string;
  name: Bilingual;
  description: Bilingual;
  price: number;
  category: string;
  image: string;
  badge?: Bilingual;
  ingredients: BilingualArray;
  allergens: BilingualArray;
  featured?: boolean;
};

export type Category = {
  id: string;
  label: Bilingual;
  emoji: string;
};

export const categories: Category[] = [
  { id: "all", label: { en: "All", ar: "الكل" }, emoji: "✦" },
  { id: "starters", label: { en: "Starters", ar: "المقبلات" }, emoji: "🌿" },
  { id: "mains", label: { en: "Mains", ar: "الرئيسية" }, emoji: "🍃" },
  { id: "seafood", label: { en: "Seafood", ar: "المأكولات البحرية" }, emoji: "🫧" },
  { id: "desserts", label: { en: "Desserts", ar: "الحلويات" }, emoji: "🌸" },
  { id: "drinks", label: { en: "Drinks", ar: "المشروبات" }, emoji: "🍵" },
];

export const dishes: Dish[] = [
  {
    id: "d1",
    name: { en: "Forest Mushroom Velouté", ar: "شوربة فطر الغابة" },
    description: {
      en: "Wild porcini and chanterelle cream, truffle oil drops, micro herbs, sourdough crisp.",
      ar: "كريمة فطر البورسيني والشانتريل البري، قطرات زيت الكمأة، أعشاب صغيرة، خبز مقرمش.",
    },
    price: 18,
    category: "starters",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    badge: { en: "Chef's Pick", ar: "اختيار الشيف" },
    ingredients: {
      en: ["Wild porcini", "Chanterelle", "Heavy cream", "Truffle oil", "Micro herbs"],
      ar: ["فطر بورسيني", "فطر شانتريل", "كريمة ثقيلة", "زيت الكمأة", "أعشاب صغيرة"],
    },
    allergens: {
      en: ["Dairy", "Gluten"],
      ar: ["ألبان", "غلوتين"],
    },
    featured: true,
  },
  {
    id: "d2",
    name: { en: "Burrata & Heirloom Tomato", ar: "بوراتا وطماطم موروثة" },
    description: {
      en: "Hand-pulled burrata, vine-ripened heirloom tomatoes, basil oil, aged balsamic, flaked sea salt.",
      ar: "بوراتا مسحوبة يدوياً، طماطم موروثة ناضجة، زيت ريحان، بلسمك معتق، ملح بحري.",
    },
    price: 22,
    category: "starters",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80",
    badge: { en: "Seasonal", ar: "موسمي" },
    ingredients: {
      en: ["Burrata", "Heirloom tomatoes", "Basil", "Balsamic", "Sea salt"],
      ar: ["بوراتا", "طماطم موروثة", "ريحان", "بلسمك", "ملح بحري"],
    },
    allergens: {
      en: ["Dairy"],
      ar: ["ألبان"],
    },
  },
  {
    id: "d3",
    name: { en: "Charred Broccolini", ar: "بروكوليني مشوي" },
    description: {
      en: "Wood-fired broccolini, whipped ricotta, pine nut gremolata, chili threads, lemon zest.",
      ar: "بروكوليني مشوي على الحطب، ريكوتا مخفوقة، غرينولاتا الصنوبر، خيوط فلفل حار، قشر ليمون.",
    },
    price: 16,
    category: "starters",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    ingredients: {
      en: ["Broccolini", "Ricotta", "Pine nuts", "Chili", "Lemon"],
      ar: ["بروكوليني", "ريكوتا", "صنوبر", "فلفل حار", "ليمون"],
    },
    allergens: {
      en: ["Dairy", "Tree nuts"],
      ar: ["ألبان", "مكسرات"],
    },
  },
  {
    id: "d4",
    name: { en: "Grass-Fed Beef Tenderloin", ar: "فيليه لحم بقري" },
    description: {
      en: "200g centre-cut fillet, potato gratin, roasted shallot purée, red wine jus, garden watercress.",
      ar: "فيليه بقري 200 غرام، غراتان البطاطس، بوريه الكراث المشوي، صلصة النبيذ الأحمر، جرجير.",
    },
    price: 58,
    category: "mains",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    badge: { en: "Signature", ar: "مميز" },
    ingredients: {
      en: ["Beef tenderloin", "Potato", "Shallots", "Red wine", "Watercress"],
      ar: ["فيليه بقري", "بطاطس", "كراث", "نبيذ أحمر", "جرجير"],
    },
    allergens: {
      en: ["Dairy"],
      ar: ["ألبان"],
    },
    featured: true,
  },
  {
    id: "d5",
    name: { en: "Roasted Cauliflower Steak", ar: "ستيك قرنبيط مشوي" },
    description: {
      en: "Whole roasted cauliflower, saffron beurre blanc, golden raisins, caperberries, almond crumble.",
      ar: "قرنبيط كامل مشوي، صلصة الزعفران بالزبدة، زبيب ذهبي، كبر، فتات اللوز.",
    },
    price: 34,
    category: "mains",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    badge: { en: "Vegan", ar: "نباتي" },
    ingredients: {
      en: ["Cauliflower", "Saffron", "Golden raisins", "Caperberries", "Almonds"],
      ar: ["قرنبيط", "زعفران", "زبيب ذهبي", "كبر", "لوز"],
    },
    allergens: {
      en: ["Tree nuts"],
      ar: ["مكسرات"],
    },
  },
  {
    id: "d6",
    name: { en: "Heritage Duck Confit", ar: "كونفي البط" },
    description: {
      en: "Slow-cooked duck leg, Puy lentil ragout, pickled cherries, duck jus, crispy kale.",
      ar: "ساق بط مطبوخ ببطء، يخنة العدس، كرز مخلل، صلصة البط، كرنب مقرمش.",
    },
    price: 46,
    category: "mains",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
    ingredients: {
      en: ["Duck leg", "Puy lentils", "Cherries", "Kale", "Duck jus"],
      ar: ["ساق بط", "عدس", "كرز", "كرنب", "صلصة البط"],
    },
    allergens: {
      en: [],
      ar: [],
    },
  },
  {
    id: "d7",
    name: { en: "Seared Atlantic Halibut", ar: "هلبوت أطلسي مشوي" },
    description: {
      en: "Line-caught halibut, saffron mussel broth, fennel confit, sea herbs, crispy capers.",
      ar: "هلبوت طازج، مرق بلح البحر بالزعفران، شمر مطهو، أعشاب بحرية، كبر مقرمش.",
    },
    price: 52,
    category: "seafood",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    badge: { en: "Sustainable", ar: "مستدام" },
    ingredients: {
      en: ["Halibut", "Mussels", "Saffron", "Fennel", "Sea herbs"],
      ar: ["هلبوت", "بلح البحر", "زعفران", "شمر", "أعشاب بحرية"],
    },
    allergens: {
      en: ["Fish", "Shellfish"],
      ar: ["أسماك", "محار"],
    },
    featured: true,
  },
  {
    id: "d8",
    name: { en: "Butter-Poached Lobster", ar: "لوبستر مسلوق بالزبدة" },
    description: {
      en: "Maine lobster tail, champagne beurre blanc, caviar, chive oil, brioche croutons.",
      ar: "ذيل لوبستر، صلصة الشمبانيا بالزبدة، كافيار، زيت الثوم المعمر، خبز بريوش مقرمش.",
    },
    price: 78,
    category: "seafood",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80",
    badge: { en: "Premium", ar: "فاخر" },
    ingredients: {
      en: ["Lobster", "Champagne", "Caviar", "Chives", "Brioche"],
      ar: ["لوبستر", "شمبانيا", "كافيار", "ثوم معمر", "بريوش"],
    },
    allergens: {
      en: ["Shellfish", "Dairy", "Gluten", "Fish"],
      ar: ["محار", "ألبان", "غلوتين", "أسماك"],
    },
  },
  {
    id: "d9",
    name: { en: "Citrus Tart", ar: "تارت الحمضيات" },
    description: {
      en: "Blood orange and yuzu cream, almond frangipane, candied zest, edible flowers, vanilla crème.",
      ar: "كريمة البرتقال الدموي واليوزو، فرانجيبان اللوز، قشر مسكر، زهور صالحة للأكل، كريمة فانيلا.",
    },
    price: 16,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
    badge: { en: "Chef's Pick", ar: "اختيار الشيف" },
    ingredients: {
      en: ["Blood orange", "Yuzu", "Almond", "Vanilla", "Edible flowers"],
      ar: ["برتقال دموي", "يوزو", "لوز", "فانيلا", "زهور صالحة للأكل"],
    },
    allergens: {
      en: ["Dairy", "Gluten", "Tree nuts", "Eggs"],
      ar: ["ألبان", "غلوتين", "مكسرات", "بيض"],
    },
  },
  {
    id: "d10",
    name: { en: "Dark Chocolate Marquise", ar: "ماركيز الشوكولاتة الداكنة" },
    description: {
      en: "70% Valrhona chocolate, salted caramel core, hazelnut praline, gold leaf, raspberry coulis.",
      ar: "شوكولاتة فالرونا 70%، حشوة كراميل مملحة، برالين بندق، ورق ذهبي، كولي التوت.",
    },
    price: 18,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80",
    ingredients: {
      en: ["Valrhona chocolate", "Caramel", "Hazelnut", "Gold leaf", "Raspberry"],
      ar: ["شوكولاتة فالرونا", "كراميل", "بندق", "ورق ذهبي", "توت"],
    },
    allergens: {
      en: ["Dairy", "Tree nuts", "Eggs"],
      ar: ["ألبان", "مكسرات", "بيض"],
    },
    featured: true,
  },
  {
    id: "d11",
    name: { en: "Ceremonial Matcha Ritual", ar: "طقوس الماتشا" },
    description: {
      en: "Single-origin Uji matcha, oat milk foam, honey drizzle. Hot or iced.",
      ar: "ماتشا أوجي أصلية، رغوة حليب الشوفان، رذاذ العسل. ساخنة أو مثلجة.",
    },
    price: 12,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80",
    badge: { en: "House Blend", ar: "خلطة المنزل" },
    ingredients: {
      en: ["Uji matcha", "Oat milk", "Honey"],
      ar: ["ماتشا أوجي", "حليب الشوفان", "عسل"],
    },
    allergens: {
      en: ["Oats"],
      ar: ["شوفان"],
    },
  },
  {
    id: "d12",
    name: { en: "Garden Spritz", ar: "سبريتز الحديقة" },
    description: {
      en: "Cucumber, elderflower, sparkling water, lime, mint, green apple — a garden in a glass.",
      ar: "خيار، زهر البيلسان، ماء فوار، ليمون، نعناع، تفاح أخضر — حديقة في كأس.",
    },
    price: 14,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    badge: { en: "Non-Alcoholic", ar: "بدون كحول" },
    ingredients: {
      en: ["Cucumber", "Elderflower", "Lime", "Mint", "Green apple"],
      ar: ["خيار", "زهر البيلسان", "ليمون", "نعناع", "تفاح أخضر"],
    },
    allergens: {
      en: [],
      ar: [],
    },
  },
];
