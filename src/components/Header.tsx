import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "Screenshots", id: "screenshots" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <svg width="32" height="35" viewBox="0 0 800 869" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M163.215 208.936C169.715 202.015 176.504 195.391 183.563 189.08L411.266 107.556C420.726 107.952 430.177 108.763 439.593 109.985L163.215 208.936Z" fill="url(#paint0_linear_22_47)"/>
                <path d="M374.649 108.096L212.201 166.256C235.836 149.52 261.765 135.941 289.436 126.034C317.107 116.127 345.763 110.163 374.649 108.096Z" fill="url(#paint14_linear_22_47)"/>
                <defs>
                  <linearGradient id="paint0_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C15F3C"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint14_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C15F3C"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-foreground">Nummi</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/70 hover:text-foreground transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/download"
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Download
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-cosmic text-white shadow-glow hover:opacity-90 transition-all">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/download"
                className="block w-full text-left py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Download
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-cosmic text-white shadow-glow hover:opacity-90 transition-all">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;
