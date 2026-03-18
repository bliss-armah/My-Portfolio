import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "AWS", label: "Cloud Certified" },
];

const About = () => {
  return (
    <section id="about" className="py-28 lg:py-36 relative">
      {/* Top border line */}
      <div className="section-container">
        <div className="h-px bg-[hsl(var(--border))] mb-20" />
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.05]">
              Turning ideas into<br />
              <span className="text-[hsl(var(--muted-foreground))]">digital reality.</span>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
                I'm Bliss Armah — a full-stack developer with a strong foundation in frontend
                engineering and a passion for building products that are both functional and
                beautifully crafted. I work across the entire stack, from pixel-perfect
                interfaces to scalable backend systems.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
                I enjoy the challenge of solving complex problems and turning them into
                simple, intuitive experiences. With an AWS Cloud Practitioner certification
                and experience in modern frameworks, I bring both technical depth and
                design sensibility to every project.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[hsl(var(--border))] rounded-xl overflow-hidden mb-10">
              {["Frontend Architecture", "API & Backend Design", "Cloud Deployment"].map((pillar) => (
                <div key={pillar} className="bg-[hsl(var(--background))] px-4 py-4">
                  <p className="text-white text-sm font-medium m-0">{pillar}</p>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" size="default">
              <Link to="/about" className="inline-flex items-center gap-2">
                Learn more
                <ArrowUpRight size={14} />
              </Link>
            </Button>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="px-6 py-6 flex items-center justify-between group hover:border-white/20 transition-colors"
              >
                <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-[hsl(var(--muted-foreground))] text-right">{stat.label}</div>
              </Card>
            ))}

            {/* Availability indicator */}
            <Card className="px-6 py-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className="text-sm text-[hsl(var(--muted-foreground))] m-0">
                Available for new opportunities
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
