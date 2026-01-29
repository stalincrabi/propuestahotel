import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Objectives from "@/components/Objectives";
import Webflow from "@/components/Webflow";
import Comparison from "@/components/Comparison";
import Scope from "@/components/Scope";
import Timeline from "@/components/Timeline";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Summary />
      <Objectives />
      <Webflow />
      <Comparison />
      <Scope />
      <Timeline />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
