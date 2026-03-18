import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { socialIcons } from "../utils/data";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/90 backdrop-blur-xl"
            : ""
        }`}
      >
        <div className="section-container h-[68px] flex items-center justify-between">
          <a
            href="/"
            className="font-display font-semibold text-sm tracking-[0.18em] text-white uppercase hover:text-white/80 transition-colors"
          >
            Bliss Armah
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm cursor-pointer transition-colors duration-200 rounded-md hover:bg-[hsl(var(--accent))] select-none ${
                    isActive
                      ? "text-white"
                      : "text-[hsl(var(--muted-foreground))] hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 text-xs font-semibold text-white border border-[hsl(var(--border))] rounded-full hover:bg-white hover:text-black transition-all duration-200 tracking-wider uppercase"
            >
              Hire me
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[hsl(var(--background))] flex flex-col px-8 pt-24 pb-12"
          >
            <ul className="flex flex-col flex-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="border-b border-[hsl(var(--border))]"
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-5 text-4xl font-display font-bold text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-center gap-5 mt-8"
            >
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
                >
                  {icon.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navibar;
