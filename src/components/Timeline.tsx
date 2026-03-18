import { motion } from "framer-motion";
import { timelineItems } from "../utils/data";

const Timeline = () => {
  return (
    <section className="py-28 lg:py-36">
      <div className="section-container">
        <div className="h-px bg-[hsl(var(--border))] mb-20" />

        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-4">
            Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.05]">
            Experience
          </h2>
        </div>

        <div className="max-w-[760px]">
          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-3 bottom-3 w-px bg-[hsl(var(--border))]" />

            {timelineItems.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full border-2 border-[hsl(var(--muted-foreground))]/40 bg-[hsl(var(--background))]" />

                {/* Year */}
                <div className="font-display text-xs font-semibold text-[hsl(var(--muted-foreground))]/50 tracking-widest uppercase mb-2">
                  {item.year}
                </div>

                {/* Content */}
                <p className="text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed m-0">
                  {item.content}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
