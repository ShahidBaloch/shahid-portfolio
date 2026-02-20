import Navbar from "@/components/layout/navbar";
import AboutSection from "@/components/sections/aboutSection";
import HomeHero from "@/components/sections/homeHero";
import PortfolioSection from "@/components/sections/portfolioSection";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-950 text-white">
        <section id="home" className="border-b border-white/10">
          <HomeHero />
        </section>

      <section id="portfolio" className="border-b border-white/10">
  <PortfolioSection />
</section>

      <section id="about" className="border-b border-white/10">
  <AboutSection />
</section>

        <section
          id="contact"
          className="min-h-[60vh] flex items-center justify-center px-6"
        >
          <h2 className="text-3xl font-semibold">Contact</h2>
        </section>
      </main>
    </>
  );
}