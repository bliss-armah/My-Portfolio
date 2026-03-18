import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { contactForm } from "../utils/data";

const Connect = () => {
  const emailEntry = contactForm.find((item) => item.text.includes("@"));

  return (
    <section id="contact" className="py-28 lg:py-40">
      <div className="section-container">
        <div className="h-px bg-[hsl(var(--border))] mb-20" />

        <motion.div
          className="max-w-[760px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-6">
            Contact
          </p>

          <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.0] tracking-[-0.03em] mb-8">
            Let's build<br />
            something<br />
            <span className="text-[hsl(var(--muted-foreground))]">great together.</span>
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed mb-10 max-w-[520px]">
            Whether you have a project in mind, want to collaborate, or just want
            to say hello — my inbox is always open.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </Button>
            {emailEntry && (
              <a
                href={`mailto:${emailEntry.text}`}
                className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
              >
                <Mail size={14} />
                {emailEntry.text}
              </a>
            )}
          </div>

          <p className="text-xs text-[hsl(var(--muted-foreground))]/50 m-0 uppercase tracking-widest">
            Available for freelance &amp; full-time opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
