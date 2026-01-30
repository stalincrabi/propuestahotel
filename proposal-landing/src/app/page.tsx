import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Webflow from '@/components/Webflow';
import Comparison from '@/components/Comparison';
import Scope from '@/components/Scope';
import Timeline from '@/components/Timeline';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Summary />
      <Webflow />
      <Comparison />
      <Scope />
      <Timeline />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
