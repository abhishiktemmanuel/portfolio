"use client";
import { useLayoutEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutComponents/AboutSection";
import ContactPage from "./components/contactPage/ContactPage";
import PortfolioPage from "./portfolio/page";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Helmet } from "react-helmet-async";

export default function Home() {
  useLayoutEffect(() => {
    const handleScroll = () => {
      // Optional: Add any scroll-based animations or effects here
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Abhishikt Emmanuel| Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Abhishikt Emmanuel - Full Stack Developer specializing in React, Next.js, and modern web development."
        />
        <meta
          name="keywords"
          content="Abhishikt Emmanuel, Full Stack Developer, React Developer, Next.js, Web Development"
        />
        <meta name="author" content="Abhishikt Emmanuel Prakash" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Abhishikt Emmanuel | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Abhishikt Emmanuel - Full Stack Developer specializing in React, Next.js, and modern web development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abhishikt.com" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abhishikt Emmanuel | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Abhishikt Emmanuel - Full Stack Developer specializing in React, Next.js, and modern web development."
        />
      </Helmet>

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
          </div>
          <div className="min-h-screen snap-start snap-always" id="portfoliio">
            <ContactPage />
          </div>
        </div>
      </main>
    </>
  );
}
