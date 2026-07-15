// src/pages/Home.tsx

import Hero from "../components/Hero";
import Features from "../components/Features";
import VisualSection from "../components/VisualSection";
import CTA from "../components/CTA";

function Home() {
  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      <Hero />
      <Features />
      <VisualSection />
      <CTA />
    </div>
  );
}

export default Home;
