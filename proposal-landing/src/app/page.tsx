import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Objectives from "@/components/Objectives";
import Webflow from "@/components/Webflow";
import Comparison from "@/components/Comparison";
import ProjectDetails from "@/components/ProjectDetails";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      {/* 1. Hero with Split Layout */}
      <Hero />

      {/* 2. Executive Summary (Clean) */}
      <Summary />

      {/* 3. Tech Stack (Webflow Cards) */}
      <Webflow />

      {/* 4. Booking Options (Comparison Cards) */}
      <Comparison />

      {/* 5. Project Scope & Pricing (Side-by-Side) */}
      <ProjectDetails />

      {/* 6. Roadmap (Horizontal) */}
      <Timeline />

      {/* 7. CTA (Floating Card) */}
      <CTA />

      <Footer />
    </main>
  );
}
