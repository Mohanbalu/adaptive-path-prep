import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Farmer Harvests", desc: "Farmer lists produce with fair pricing on the platform." },
  { num: "02", title: "Shop Receives", desc: "Local vegetable shops receive fresh stock with loading support." },
  { num: "03", title: "Customer Browses", desc: "Customers see real-time inventory, freshness, and transparent pricing." },
  { num: "04", title: "Choose Delivery", desc: "Pick self pickup, seller delivery, or platform rider — your call." },
  { num: "05", title: "Fresh at Doorstep", desc: "Get farm-fresh vegetables delivered with full price transparency." },
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
          <span className="text-sm font-medium text-accent tracking-wider uppercase">How It Works</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Farm to Home in <span className="text-gradient-accent">5 Simple Steps</span>
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
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-display font-bold text-sm shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-16 bg-border" />
                )}
              </div>
              <div className="pt-2 pb-8">
                <h3 className="font-display font-semibold text-lg text-foreground">{step.title}</h3>
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
