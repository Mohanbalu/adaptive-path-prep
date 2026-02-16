import { motion } from "framer-motion";
import {
  Shield,
  Layers,
  FileCode,
  Bot,
  BookOpen,
  Map,
  BarChart3,
  Timer,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Smart Authentication",
    description: "Secure Google login with persistent skill profiles and progress tracking.",
  },
  {
    icon: Layers,
    title: "Two-Phase Assessment",
    description: "Initial skill classification followed by adaptive timed coding challenges.",
  },
  {
    icon: FileCode,
    title: "3-Part Answer System",
    description: "Submit pseudo-code, actual code, and English explanation for holistic evaluation.",
  },
  {
    icon: Bot,
    title: "5-Step AI Evaluation",
    description: "LangChain pipeline analyzing logic, quality, communication, test cases, and overall score.",
  },
  {
    icon: BookOpen,
    title: "RAG Problem Retrieval",
    description: "50+ curated problems matched to your skill level and weak areas — not random GPT outputs.",
  },
  {
    icon: Map,
    title: "Personalized Roadmap",
    description: "23+ learning modules dynamically prioritized based on your assessment results.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Track scores, time taken, weak areas, and improvement trends over every session.",
  },
  {
    icon: Timer,
    title: "Timed Challenges",
    description: "Difficulty-calibrated time limits: Easy 30min, Medium 45min, Hard 60min with auto-submit.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Everything You Need to <span className="text-gradient-primary">Get Placed</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A complete AI-driven ecosystem — from assessment to evaluation to personalized learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-gradient-card border border-border hover:border-glow rounded-lg p-6 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
