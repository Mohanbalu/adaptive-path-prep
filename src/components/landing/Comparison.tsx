import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { feature: "Curriculum", traditional: "Static, one-size-fits-all", ours: "Adaptive skill-based paths" },
  { feature: "Problems", traditional: "Random GPT-generated", ours: "Curated & verified database" },
  { feature: "Scoring", traditional: "Single pass/fail score", ours: "Multi-dimensional evaluation" },
  { feature: "Communication", traditional: "Not measured", ours: "English articulation analysis" },
  { feature: "Roadmap", traditional: "Manual or none", ours: "AI-generated learning path" },
  { feature: "Difficulty", traditional: "No adaptation", ours: "Adapts to your skill level" },
];

const Comparison = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Comparison</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Not Your Average <span className="text-gradient-primary">LMS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-lg border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
            <div className="p-4 font-semibold text-sm text-muted-foreground">Feature</div>
            <div className="p-4 font-semibold text-sm text-muted-foreground text-center">Traditional LMS</div>
            <div className="p-4 font-semibold text-sm text-primary text-center">Our Platform</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-b border-border last:border-b-0 ${
                i % 2 === 0 ? "bg-card" : "bg-secondary/20"
              }`}
            >
              <div className="p-4 text-sm font-medium text-foreground">{row.feature}</div>
              <div className="p-4 text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
                <X className="h-4 w-4 text-destructive shrink-0" />
                <span className="hidden sm:inline">{row.traditional}</span>
              </div>
              <div className="p-4 text-sm text-foreground text-center flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="hidden sm:inline">{row.ours}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
