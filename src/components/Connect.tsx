import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactForm } from "../utils/data";
import ContactForm from "./ContactForm";

const Connect = () => {
  const phoneEntry = contactForm.find((item) => item.text.includes("+"));
  const emailEntry = contactForm.find((item) => item.text.includes("@"));
  const locationEntry = contactForm.find(
    (item) => !item.text.includes("+") && !item.text.includes("@")
  );

  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="section-container">
        <div className="h-px bg-[hsl(var(--border))] mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-6">
              Contact
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.0] tracking-[-0.03em] mb-8">
              Let's build<br />
              something<br />
              <span className="text-[hsl(var(--muted-foreground))]">great together.</span>
            </h2>

            <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed mb-10 max-w-[420px]">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — my inbox is always open.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3 mb-10">
              {phoneEntry && (
                <a
                  href={`tel:${phoneEntry.text}`}
                  className="inline-flex items-center gap-3 text-sm text-white font-medium hover:text-white/70 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] flex items-center justify-center text-[hsl(var(--muted-foreground))] group-hover:border-white/20 transition-colors shrink-0">
                    <Phone size={13} />
                  </span>
                  {phoneEntry.text}
                </a>
              )}
              {emailEntry && (
                <a
                  href={`mailto:${emailEntry.text}`}
                  className="inline-flex items-center gap-3 text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] flex items-center justify-center text-[hsl(var(--muted-foreground))] group-hover:border-white/20 transition-colors shrink-0">
                    <Mail size={13} />
                  </span>
                  {emailEntry.text}
                </a>
              )}
              {locationEntry && (
                <div className="inline-flex items-center gap-3 text-sm text-[hsl(var(--muted-foreground))]">
                  <span className="w-8 h-8 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] flex items-center justify-center text-[hsl(var(--muted-foreground))] shrink-0">
                    <MapPin size={13} />
                  </span>
                  {locationEntry.text}
                </div>
              )}
            </div>

            <p className="text-xs text-[hsl(var(--muted-foreground))]/40 m-0 uppercase tracking-widest">
              Available for freelance &amp; full-time opportunities
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
