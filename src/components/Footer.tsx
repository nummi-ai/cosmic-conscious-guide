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
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nummi. Bringing consciousness to AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
