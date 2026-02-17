import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#stakeholders", label: "Stakeholders" },
];

const Navbar = () => {
  const { session } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-display font-bold text-lg text-foreground">TrustCart</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <Link to="/dashboard"><Button size="sm">Dashboard</Button></Link>
          ) : (
            <>
              <Link to="/login"><Button variant="outline" size="sm">Sign In</Button></Link>
              <Link to="/register"><Button size="sm">Get Started</Button></Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-2 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-foreground font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            {session ? (
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                <Button className="w-full">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/register" onClick={() => setOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
