import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Mentorship Initiative", category: "Guidance", color: "from-orange-200 to-amber-100" },
  { title: "Community Outreach", category: "Social Impact", color: "from-slate-200 to-slate-100" },
  { title: "Youth Empowerment", category: "Education", color: "from-rose-200 to-pink-100" },
  { title: "Awareness Campaign", category: "Advocacy", color: "from-sky-200 to-blue-100" },
  { title: "Support Network", category: "Community", color: "from-emerald-200 to-green-100" },
  { title: "Change Movement", category: "Social Change", color: "from-violet-200 to-purple-100" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/40">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">Initiatives</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Making an Impact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden mb-4`}>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card rounded-full p-3 shadow-lg">
                    <ExternalLink className="h-5 w-5 text-foreground" />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
