import { servicesData } from "../utils/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <section className="py-28 lg:py-36">
      <div className="section-container">
        <div className="h-px bg-[hsl(var(--border))] mb-20" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-4">
              Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.05]">
              What I do
            </h2>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] max-w-sm text-sm leading-relaxed">
            End-to-end development services, from concept and design through to
            deployment and maintenance.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-[hsl(var(--border))]">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="group flex items-start gap-8 py-8 cursor-default"
            >
              {/* Number */}
              <span className="font-display text-sm font-medium text-[hsl(var(--muted-foreground))]/40 w-8 shrink-0 pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 items-start">
                <h3 className="font-display text-xl font-semibold text-white capitalize group-hover:text-white/90 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed m-0">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="text-[hsl(var(--muted-foreground))]/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 pt-1">
                <ArrowUpRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
