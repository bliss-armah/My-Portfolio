import { Navibar } from "../components";
import ContactText from "../components/ContactText";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { Footer } from "../components";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navibar />

      {/* Header */}
      <div className="pt-[68px]">
        <div className="section-container py-16 md:py-24 border-b border-[hsl(var(--border))]">
          <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-3">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.05]">
            Get in touch
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-start max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactText />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
