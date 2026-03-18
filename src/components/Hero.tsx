import { socialIcons } from "../utils/data";
import { Link as ScrollLinkBase } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImg from "../assets/images/hero-img.jpeg";
import type React from "react";

// Type cast to avoid react-scroll/react-18 type mismatch
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollLink = ScrollLinkBase as unknown as React.ComponentType<any>;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[68px] overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative w-full py-20 lg:py-0 lg:min-h-[calc(100vh-68px)] lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center w-full">
          {/* Left — text content */}
          <div>
            <motion.p
              className="text-[hsl(var(--muted-foreground))] text-xs tracking-[0.25em] uppercase font-medium mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Full-Stack Developer · Based in Ghana
            </motion.p>

            <motion.h1
              className="font-display text-[clamp(56px,9vw,104px)] font-bold text-white leading-[0.92] tracking-[-0.04em] mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              Bliss
              <br />
              Armah-Nwanwah
            </motion.h1>

            <motion.p
              className="text-[hsl(var(--muted-foreground))] max-w-[460px] text-base md:text-lg leading-relaxed mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              Building elegant, high-performance web experiences. Passionate
              about clean architecture and modern design across the full stack.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mb-14"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              <ScrollLink
                to="project"
                smooth={true}
                duration={600}
                offset={-80}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all cursor-pointer"
              >
                View Work
                <ArrowDown size={14} />
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(var(--border))] text-white text-sm font-medium rounded-full hover:border-white/30 hover:bg-[hsl(var(--accent))] transition-all cursor-pointer"
              >
                Get in touch
                <ArrowUpRight size={14} />
              </ScrollLink>
            </motion.div>

            <motion.div
              className="flex items-center gap-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
            >
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[hsl(var(--muted-foreground))] hover:text-white transition-colors text-lg"
                >
                  {icon.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — photo with floating cards */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[hsl(var(--border))]">
              <img
                src={heroImg}
                alt="Bliss Armah-Nwanwah"
                className="w-full h-full object-cover object-top"
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
              />
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
            </div>

            {/* Floating stat — experience */}
            <motion.div
              className="absolute -bottom-4 -left-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl px-5 py-4 shadow-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="font-display font-bold text-2xl text-white leading-none mb-1">
                3+
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] tracking-wide">
                Years of experience
              </div>
            </motion.div>

            {/* Floating stat — projects */}
            <motion.div
              className="absolute -top-4 -right-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl px-5 py-4 shadow-2xl"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="font-display font-bold text-2xl text-white leading-none mb-1">
                10+
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] tracking-wide">
                Projects delivered
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
