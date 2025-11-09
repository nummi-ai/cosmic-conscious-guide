import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppScreenshots from "@/components/AppScreenshots";
import SocialProof from "@/components/SocialProof";
import Vision from "@/components/Vision";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AppScreenshots />
      <SocialProof />
      <Vision />
      <Features />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
