import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Brain, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="container flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg text-foreground">PrepAI</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{user?.email}</span>
            </div>
            <Button variant="outline" size="sm" onClick={signOut} className="border-glow">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back! 👋</h1>
        <p className="text-muted-foreground mb-8">
          You're signed in as <span className="text-primary">{user?.email}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Start Assessment", desc: "Take an initial skill assessment to get classified.", emoji: "🧪" },
            { title: "Practice Problems", desc: "Solve curated problems matched to your level.", emoji: "💻" },
            { title: "View Roadmap", desc: "See your personalized learning path.", emoji: "🗺️" },
          ].map((card) => (
            <div key={card.title} className="bg-gradient-card border border-border hover:border-glow rounded-xl p-8 transition-all duration-300 hover:shadow-glow cursor-pointer">
              <span className="text-4xl mb-4 block">{card.emoji}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
