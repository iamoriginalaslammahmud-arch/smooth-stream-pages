import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/40" />

      <div className="container relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-6"
        >
          Guidance · Mentorship · Change
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
        >
          Empower those
          <br />
          <span className="text-primary">around you.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
        >
          Everyone should strive to empower those around them by providing the right guidance and helping them move forward to the best of their ability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="rounded-full px-8 text-base font-medium" asChild>
            <a href="#portfolio">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-medium" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full bg-primary"
      />
    </section>
  );
};

export default HeroSection;
