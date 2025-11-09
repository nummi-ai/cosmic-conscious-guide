import Hero from "@/components/Hero";
import AppScreenshots from "@/components/AppScreenshots";
import SocialProof from "@/components/SocialProof";
import Vision from "@/components/Vision";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
