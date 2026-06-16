import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/home/components/TopNav";
import { HeroSection } from "@/home/components/HeroSection";
import { TrendingProjects } from "@/home/components/TrendingProjects";
import { MicroMarkets } from "@/home/components/MicroMarkets";
import { TopDevelopers } from "@/home/components/TopDevelopers";
import { DimensionsCarousel } from "@/home/components/DimensionsCarousel";
import { EcosystemSection } from "@/home/components/EcosystemSection";
import { VerifiedStandard } from "@/home/components/VerifiedStandard";
import { FAQSection } from "@/home/components/FAQSection";
import { Footer } from "@/home/components/Footer";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "prOPIUM.ai | Intelligence for every Real Estate decision" },
      {
        name: "description",
        content:
          "Independent property intelligence and analytics platform — RERA status, builder credibility, real prices, and risk signals updated continuously.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div
      className="antialiased blueprint-grid"
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#F8FAFC",
        color: "#0F172A",
        minHeight: "100vh",
      }}
    >
      <TopNav />
      <HeroSection />
      <main
        className="mx-auto px-4 md:px-8 lg:px-10 py-8 md:py-12"
        style={{ maxWidth: 1280, display: "flex", flexDirection: "column" }}
      >
        <TrendingProjects />
        <MicroMarkets />
        <TopDevelopers />
        <DimensionsCarousel />
        <EcosystemSection />
        <VerifiedStandard />
        <FAQSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
