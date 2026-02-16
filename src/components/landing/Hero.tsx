import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AI neural network visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glow bg-secondary/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">AI-Powered Placement Prep</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Master Code.{" "}
            <span className="text-gradient-primary">Articulate Logic.</span>{" "}
            Land Your Dream Job.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The adaptive platform that evaluates your algorithms, code quality, and communication skills —
            then builds a personalized roadmap to get you placement-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 shadow-glow animate-pulse-glow">
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-glow">
              See How It Works
            </Button>
          </div>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Brain, label: "Algorithmic Logic", desc: "DSA evaluation with adaptive difficulty" },
              { icon: Code, label: "Code Quality", desc: "AI-powered readability & correctness analysis" },
              { icon: MessageSquare, label: "Communication", desc: "English articulation scoring" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="bg-gradient-card border border-glow rounded-lg p-6 text-center"
              >
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
