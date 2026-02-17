import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <span className="font-display font-semibold text-foreground">TrustCart</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 TrustCart. Farm-to-Home Agri Commerce Network.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
