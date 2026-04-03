import { motion } from "framer-motion";
import { Palette, Code, Smartphone, BarChart3, Layers, Zap } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", description: "Intuitive interfaces that delight users and drive engagement." },
  { icon: Code, title: "Web Development", description: "Clean, performant code built with modern frameworks." },
  { icon: Smartphone, title: "Mobile Apps", description: "Responsive, native-feeling experiences across all devices." },
  { icon: BarChart3, title: "Analytics", description: "Data-driven insights to optimize your digital presence." },
  { icon: Layers, title: "Brand Identity", description: "Cohesive visual systems that tell your story." },
  { icon: Zap, title: "Performance", description: "Lightning-fast load times and smooth interactions." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Services & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
