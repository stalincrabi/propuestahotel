import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Webflow from '@/components/Webflow';
import Comparison from '@/components/Comparison';
import ProjectDetails from '@/components/ProjectDetails';
import Timeline from '@/components/Timeline';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Summary />
      <Webflow />
      <Comparison />
      <ProjectDetails />
      <Timeline />
      <CTA />
      <Footer />
    </main>
  );
}
