import { motion } from "framer-motion";
import { ArrowRight, ShoppingBasket, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20 md:pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Vibrant Indian vegetable market"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/35" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary-foreground font-medium">Farm-to-Home Agri Network</span>
          </motion.div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 md:mb-6 text-primary-foreground">
            Fresh From Farm.{" "}
            <span className="text-gradient-accent">Trust in Every Cart.</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mb-6 md:mb-10">
            Connecting farmers, shops, delivery partners, and customers in one transparent agri ecosystem.
            Fair prices. Real-time stock. Three delivery options.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-16">
            <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-glow animate-pulse-glow">
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              See How It Works
            </Button>
          </div>

          {/* 3 pillars */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {[
              { icon: ShoppingBasket, label: "Real-Time Inventory", desc: "Live stock, prices & freshness from local shops" },
              { icon: Truck, label: "3-Way Delivery", desc: "Self pickup, seller delivery, or platform rider" },
              { icon: Users, label: "Trust Ecosystem", desc: "Fair pricing chain from farm to your doorstep" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-2 sm:p-4 md:p-5 text-center"
              >
                <item.icon className="h-5 w-5 sm:h-7 sm:w-7 text-accent mx-auto mb-1 sm:mb-3" />
                <h3 className="font-display font-semibold text-primary-foreground text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 leading-tight">{item.label}</h3>
                <p className="text-xs text-primary-foreground/70 hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
