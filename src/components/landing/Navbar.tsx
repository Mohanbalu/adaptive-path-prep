import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" />
          <span className="font-bold text-lg text-foreground">PrepAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#comparison" className="hover:text-foreground transition-colors">Compare</a>
        </div>
        <Button size="sm">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
