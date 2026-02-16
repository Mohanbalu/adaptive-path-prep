import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Sign In", desc: "Login with Google and set up your profile in seconds." },
  { num: "02", title: "Initial Assessment", desc: "Take a quick test to evaluate DSA, communication, and technical skills." },
  { num: "03", title: "Get Classified", desc: "AI classifies you as Beginner, Intermediate, or Advanced." },
  { num: "04", title: "Solve Problems", desc: "Select curated problems with timed sessions matched to your level." },
  { num: "05", title: "AI Evaluation", desc: "5-step LangChain pipeline scores your code, logic, and articulation." },
  { num: "06", title: "Grow & Repeat", desc: "Get your personalized roadmap updated — difficulty adapts as you improve." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent tracking-wider uppercase">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            From Sign-Up to <span className="text-gradient-accent">Placement-Ready</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start relative"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-secondary border border-glow flex items-center justify-center text-primary font-mono font-bold text-sm shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-16 bg-border" />
                )}
              </div>
              <div className="pt-2 pb-8">
                <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
