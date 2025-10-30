import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";

const Download = () => {
  const [deviceType, setDeviceType] = useState<"android" | "ios" | "other">("other");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      setDeviceType("android");
      // Auto-redirect Android users to Play Store after a short delay
      setTimeout(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=com.nummi.chat.mobile";
      }, 1500);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setDeviceType("ios");
    } else {
      setDeviceType("other");
    }
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe-ios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Cosmic Animated Background */}
        <div className="absolute inset-0 z-0 bg-cosmic-animated">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        <div className="container relative z-10 px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            {/* Android Users - Redirecting */}
            {deviceType === "android" && (
              <div className="text-center space-y-8 animate-fade-in">
                <div className="inline-block p-4 bg-gradient-cosmic rounded-full shadow-glow animate-pulse mb-4">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  Redirecting to Play Store...
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
                  Taking you to download Nummi on Google Play Store
                </p>

                <div className="pt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-cosmic text-primary-foreground shadow-glow hover:opacity-90 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Click here if redirect doesn't work
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {/* iOS Users - Coming Soon */}
            {deviceType === "ios" && (
              <div className="text-center space-y-8 animate-fade-in">
                <div className="inline-block p-4 bg-card/80 backdrop-blur-sm rounded-full shadow-glow mb-4">
                  <svg className="w-16 h-16 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  iOS App Coming Soon
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
                  We're working hard to bring Nummi to the App Store. Want to be notified when we launch?
                </p>

                {/* Email Capture Form */}
                <div className="pt-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md mx-auto">
                      <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-soft border border-white/10">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-background/80 border-white/20 text-foreground placeholder:text-muted-foreground h-12 text-base"
                        />
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isLoading}
                          className="w-full mt-4 bg-gradient-cosmic text-primary-foreground shadow-glow hover:opacity-90 transition-all duration-300"
                        >
                          {isLoading ? "Submitting..." : "Notify Me"}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-soft border border-white/10 max-w-md mx-auto">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white">You're on the list!</h3>
                        <p className="text-white/70 text-center">
                          We'll email you as soon as Nummi launches on iOS.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Also show Android option */}
                <div className="pt-8 border-t border-white/10">
                  <p className="text-white/60 mb-4">Have an Android device?</p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Download on Play Store
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {/* Desktop/Other Users */}
            {deviceType === "other" && (
              <div className="text-center space-y-8 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  Download Nummi
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
                  Your conscious AI companion. Get personalized Vedic astrology insights and daily cosmic guidance.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-6">
                  {/* Android Card */}
                  <div className="bg-card/50 backdrop-blur-md p-8 rounded-2xl shadow-soft border border-white/10 hover:shadow-glow transition-all duration-300">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 bg-gradient-cosmic rounded-full">
                        <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Android</h3>
                      <p className="text-white/70 text-center">Available now on Google Play Store</p>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          size="lg"
                          className="w-full bg-gradient-cosmic text-primary-foreground shadow-glow hover:opacity-90 transition-all duration-300"
                        >
                          Download Now
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* iOS Card */}
                  <div className="bg-card/50 backdrop-blur-md p-8 rounded-2xl shadow-soft border border-white/10">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 bg-muted/30 rounded-full">
                        <svg className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">iOS</h3>
                      <p className="text-white/70 text-center">Coming soon to the App Store</p>

                      {!isSubmitted ? (
                        <form onSubmit={handleEmailSubmit} className="w-full space-y-3">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-background/80 border-white/20 text-foreground placeholder:text-muted-foreground"
                          />
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isLoading}
                            variant="outline"
                            className="w-full border-white/20 text-white hover:bg-white/10"
                          >
                            {isLoading ? "Submitting..." : "Notify Me"}
                          </Button>
                        </form>
                      ) : (
                        <div className="w-full py-4 px-6 bg-gradient-cosmic/20 rounded-xl border border-secondary/30">
                          <p className="text-white/90 text-center font-medium">
                            ✓ We'll notify you when it's ready!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Download;
