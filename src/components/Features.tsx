import { Sparkles, MessageCircle, Sun, User } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Personalised Guidance",
    description: "Powered by your date, time, and place of birth for truly unique insights.",
  },
  {
    icon: MessageCircle,
    title: "Conversational Wisdom",
    description: "Chat naturally and get insights rooted in Vedic and modern spirituality.",
  },
  {
    icon: Sun,
    title: "Daily Alignment",
    description: "Short, actionable prompts that help you make better choices every day.",
  },
  {
    icon: User,
    title: "Soul Profile",
    description: "A personal profile that evolves and updates as you grow on your journey.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-warm">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We're Building
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ancient wisdom powered by modern intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
