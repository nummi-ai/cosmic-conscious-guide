const AppScreenshots = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
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
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                      <path d="M21 15l-5-5L5 21" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm text-muted-foreground">App Screenshot 1</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Replace in VSCode</p>
                  </div>
                </div>
                {/* To add your image, use: */}
                {/* <img src="/path-to-your-image.png" alt="Chat Interface" className="w-full h-full object-cover" /> */}
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">AI Conversations</h3>
                <p className="text-sm text-muted-foreground">Chat that truly remembers you</p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-full max-w-[280px] aspect-[9/19.5] bg-gradient-to-br from-secondary/10 to-tertiary/10 rounded-3xl shadow-soft border border-border overflow-hidden">
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-secondary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                      <path d="M21 15l-5-5L5 21" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm text-muted-foreground">App Screenshot 2</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Replace in VSCode</p>
                  </div>
                </div>
                {/* To add your image, use: */}
                {/* <img src="/path-to-your-image.png" alt="Astrology Insights" className="w-full h-full object-cover" /> */}
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">Vedic Astrology</h3>
                <p className="text-sm text-muted-foreground">Personalized cosmic insights</p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-[280px] aspect-[9/19.5] bg-gradient-to-br from-tertiary/10 to-primary/10 rounded-3xl shadow-soft border border-border overflow-hidden">
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-tertiary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                      <path d="M21 15l-5-5L5 21" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm text-muted-foreground">App Screenshot 3</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Replace in VSCode</p>
                  </div>
                </div>
                {/* To add your image, use: */}
                {/* <img src="/path-to-your-image.png" alt="Daily Guidance" className="w-full h-full object-cover" /> */}
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
