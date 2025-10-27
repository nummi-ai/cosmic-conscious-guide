import { Sparkles, MessageCircle, Sun, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Instant Vedic Astrology Profile",
    description: "Sign up and we automatically create your complete Vedic astrology profile — saved forever in your personal cosmic database.",
  },
  {
    icon: MessageCircle,
    title: "AI Companion with Memory",
    description: "Nummi remembers every conversation, your birth chart, and your journey. Chat like you're talking to a friend who truly knows you — spiritual guide, therapist, and companion in one.",
  },
  {
    icon: Sun,
    title: "Daily Cosmos Insights",
    description: "Get your personalized daily horoscope based on accurate Vedic readings. Share your cosmic message with friends — it's like getting a note from the universe every morning.",
  },
  {
    icon: Heart,
    title: "Deep Spiritual Guidance",
    description: "Experience personalized guidance tailored to your unique soul journey. Get answers to life's biggest questions with wisdom rooted in ancient Vedic traditions.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-warm">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need for cosmic clarity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful features that transform how you connect with the universe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-cosmic text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
