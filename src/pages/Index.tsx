import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Vision />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
