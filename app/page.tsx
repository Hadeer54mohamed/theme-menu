import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { dishes, categories } from "@/lib/menuData";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface pt-24 pb-28 md:pb-0">
        <section
          id="menu"
          className="py-8 md:py-16 max-w-6xl mx-auto px-6"
          aria-labelledby="menu-heading"
        >
          <MenuSection dishes={dishes} categories={categories} />
        </section>

        <Footer />
      </main>

      <BottomNav />
    </>
  );
}
