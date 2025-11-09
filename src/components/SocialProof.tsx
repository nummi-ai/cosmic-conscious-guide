const SocialProof = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-warm">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Stats Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-cosmic text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              Trusted by Thousands
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Join the Conscious Community
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Over 1,000 users discovered their cosmic path in just one week.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">1K+</div>
              <div className="text-muted-foreground font-medium">Downloads</div>
              <div className="text-sm text-muted-foreground/70 mt-1">In just one week</div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">5.0★</div>
              <div className="text-muted-foreground font-medium">App Rating</div>
              <div className="text-sm text-muted-foreground/70 mt-1">On Google Play</div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">2K+</div>
              <div className="text-muted-foreground font-medium">Messages</div>
              <div className="text-sm text-muted-foreground/70 mt-1">AI conversations daily</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border">
              <div className="flex items-center gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "Nummi understands me better than any AI I've tried. The astrology insights are surprisingly accurate, and I love how it remembers our conversations."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah M.</div>
                  <div className="text-sm text-muted-foreground">Android User</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border">
              <div className="flex items-center gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "Finally, an AI that combines spirituality with technology. The daily guidance helps me stay centered, and the Vedic astrology is spot on!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center text-white font-semibold">
                  R
                </div>
                <div>
                  <div className="font-semibold text-foreground">Raj P.</div>
                  <div className="text-sm text-muted-foreground">Early Adopter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
