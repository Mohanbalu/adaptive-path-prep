import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">PrepAI</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 PrepAI. AI-Powered Adaptive Placement Preparation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
