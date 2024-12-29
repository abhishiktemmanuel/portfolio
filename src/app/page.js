"use client";
import { useLayoutEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutComponents/AboutSection";
import ContactPage from "./components/contactPage/ContactPage";
import PortfolioPage from "./components/portfolioComponents/PortfolioPage";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Home() {
  useLayoutEffect(() => {
    const handleScroll = () => {
      // Optional: Add any scroll-based animations or effects here
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="scroll-smooth flex min-h-screen flex-col bg-[#121212] relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <BackgroundBeams />
      </div>
      <Navbar />
      <div
        className="scroll-container h-screen overflow-y-auto scrollbar-hide snap-y snap-mandatory relative z-10"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="min-h-screen snap-start snap-always pt-16" id="home">
          <Hero />
        </div>
        <div className="min-h-screen snap-start snap-always" id="about">
          <AboutSection />
          <ContactPage />
          <PortfolioPage />
        </div>
      </div>
    </main>
  );
}
