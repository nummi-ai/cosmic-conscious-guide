import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Start free, upgrade when you're ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-background p-8 rounded-2xl shadow-soft border border-border">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Free</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">₹0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">3 chat conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Daily natal insights</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Basic Soul Profile</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full" size="lg">
              Get Started
            </Button>
          </div>

          {/* Premium Tier */}
          <div className="relative bg-gradient-cosmic p-8 rounded-2xl shadow-glow border-2 border-primary overflow-hidden">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Premium</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary-foreground">₹299</span>
                <span className="text-primary-foreground/80">/month</span>
              </div>
              <p className="text-primary-foreground/70 text-sm mt-2">or ₹1,999/year (save 33%)</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground">Unlimited conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground">Personalised readings</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground">Deep guidance & analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground">Advanced Soul Profile</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground">Priority support</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-background text-foreground hover:bg-background/90" 
              size="lg"
            >
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
