import { motion } from "framer-motion";
import {
  Eye,
  Truck,
  Users,
  Handshake,
  ShoppingBasket,
  BarChart3,
  Package,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Live Shop Inventory",
    description: "See what's available, how fresh it is, and the real-time price — before you even step out.",
  },
  {
    icon: Truck,
    title: "3-Way Delivery",
    description: "Self pickup, seller delivery, or platform rider — choose the option that works for you.",
  },
  {
    icon: Package,
    title: "Loading/Unloading Support",
    description: "Shopkeepers can request on-demand labor for loading/unloading — organized and digitally paid.",
  },
  {
    icon: Wallet,
    title: "Farmer Trust Loans",
    description: "Small, trust-based loans for farmers. No contract farming, no forced selling. Just loyalty.",
  },
  {
    icon: BarChart3,
    title: "Transparent Pricing",
    description: "See the full price chain: Farm → Transport → Shop Margin → Your Price. Total transparency.",
  },
  {
    icon: ShoppingBasket,
    title: "Fresh Guaranteed",
    description: "Real-time freshness updates and quality tracking from farm to your kitchen table.",
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Connecting farmers, shops, riders, workers, and customers — one platform for the whole village.",
  },
  {
    icon: Handshake,
    title: "Fair for Everyone",
    description: "Farmers get fair prices, shops get digital tools, workers get jobs, customers get freshness.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Not Just Delivery — <span className="text-gradient-primary">An Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A complete agri commerce network connecting every part of the supply chain with trust and transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border hover:border-primary/30 rounded-xl p-6 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
