import { motion } from "framer-motion";
import { Sprout, Store, Truck, Hammer, ShoppingCart } from "lucide-react";

const stakeholders = [
  {
    icon: Sprout,
    role: "Farmers",
    benefit: "Fair market access + trust-based loans",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Store,
    role: "Shop Owners",
    benefit: "Digital inventory + delivery + labor support",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Truck,
    role: "Delivery Partners",
    benefit: "Flexible earning with 3-model delivery",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Hammer,
    role: "Load Workers",
    benefit: "On-demand micro-jobs with digital payment",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: ShoppingCart,
    role: "Customers",
    benefit: "Fresh vegetables + choice + transparent pricing",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Comparison = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Stakeholders</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Everyone <span className="text-gradient-primary">Benefits</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A platform that creates value for every part of the agri supply chain.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stakeholders.map((s, i) => (
            <motion.div
              key={s.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 hover:border-primary/30"
            >
              <div className={`w-14 h-14 rounded-xl ${s.bgColor} flex items-center justify-center mx-auto mb-4`}>
                <s.icon className={`h-7 w-7 ${s.color}`} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.role}</h3>
              <p className="text-sm text-muted-foreground">{s.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
