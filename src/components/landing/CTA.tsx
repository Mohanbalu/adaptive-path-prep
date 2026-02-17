import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-card border border-primary/20 rounded-2xl p-12 md:p-16 shadow-glow relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <Leaf className="h-10 w-10 text-primary mx-auto mb-6" />

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join the <span className="text-gradient-primary">TrustCart</span> Network
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Whether you're a farmer, shop owner, delivery partner, or customer — there's a place for you in our ecosystem.
          </p>

          <Button size="lg" className="text-lg px-10 py-6 shadow-glow">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
