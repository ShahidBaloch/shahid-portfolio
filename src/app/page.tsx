import Navbar from "@/components/layout/navbar";
import AboutSection from "@/components/sections/aboutSection";
import ContactSection from "@/components/sections/contactSection";
import ExperienceSection from "@/components/sections/experienceSection";
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
        <section id="experience" className="border-b border-white/10">
          <ExperienceSection />
        </section>
        <section id="about" className="border-b border-white/10">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}