import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Nummi</h3>
            <p className="text-muted-foreground">
              Where consciousness meets technology
            </p>
          </div>

          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <a 
              href="https://app.nummi.ai/privacy-policy" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://app.nummi.ai/terms" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="mailto:hello@nummi.ai" 
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/getnummi/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@getnummi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/getnummi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@getnummi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nummi AI Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
