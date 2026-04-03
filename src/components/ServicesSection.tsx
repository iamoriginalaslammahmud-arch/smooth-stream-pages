import { motion } from "framer-motion";
import { Compass, Users, BookOpen, Heart, Scale, Lightbulb } from "lucide-react";

const services = [
  { icon: Compass, title: "Guidance", description: "Helping others find direction through thoughtful mentorship and genuine support." },
  { icon: Users, title: "Community", description: "Building bridges between people to foster connection, trust, and collective growth." },
  { icon: BookOpen, title: "Continuous Learning", description: "Embracing every opportunity to grow, unlearn, and evolve as a person." },
  { icon: Scale, title: "Social Justice", description: "Standing against irregularities and injustices embedded in conventional systems." },
  { icon: Heart, title: "Empathy", description: "Leading with compassion and understanding in every interaction." },
  { icon: Lightbulb, title: "Awareness", description: "Sparking positive change through informed perspectives and open dialogue." },
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
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">What I Stand For</h2>
          <p className="mt-6 text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            I am a continuous learner, currently navigating my journey of growth. I stand firmly against the irregularities and injustices of conventional social systems, aiming to spark positive change through awareness.
          </p>
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
