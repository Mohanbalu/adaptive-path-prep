import { Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { session } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" />
          <span className="font-bold text-lg text-foreground">PrepAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#comparison" className="hover:text-foreground transition-colors">Compare</a>
        </div>
        <div className="flex items-center gap-3">
          {session ? (
            <Link to="/dashboard"><Button size="sm">Dashboard</Button></Link>
          ) : (
            <>
              <Link to="/login"><Button variant="outline" size="sm" className="border-glow">Sign In</Button></Link>
              <Link to="/register"><Button size="sm">Sign Up</Button></Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
