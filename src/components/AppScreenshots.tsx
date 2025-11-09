const AppScreenshots = () => {
  return (
    <section id="screenshots" className="py-20 md:py-32 bg-background scroll-mt-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              See Nummi in Action
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience personalized astrology, intelligent conversations, and daily cosmic guidance—all in one beautiful app.
            </p>
          </div>

          {/* Screenshots Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Screenshot 1 */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in">
              <div className="relative w-full max-w-[280px] aspect-[9/19.5] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl shadow-soft border border-border overflow-hidden">
                <img src="/13993@3x.png" alt="AI Conversations - Chat Interface" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">AI Conversations</h3>
                <p className="text-sm text-muted-foreground">Chat that truly remembers you</p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-full max-w-[280px] aspect-[9/19.5] bg-gradient-to-br from-secondary/10 to-tertiary/10 rounded-3xl shadow-soft border border-border overflow-hidden">
                <img src="/1325@3x.png" alt="Vedic Astrology - Cosmic Insights" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">Vedic Astrology</h3>
                <p className="text-sm text-muted-foreground">Personalized cosmic insights</p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-[280px] aspect-[9/19.5] bg-gradient-to-br from-tertiary/10 to-primary/10 rounded-3xl shadow-soft border border-border overflow-hidden">
                <img src="/13992@3x.png" alt="Daily Guidance - Cosmic Wisdom" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">Daily Guidance</h3>
                <p className="text-sm text-muted-foreground">Cosmic wisdom every day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
