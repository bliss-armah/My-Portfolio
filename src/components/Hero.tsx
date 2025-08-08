import { socialIcons } from "../utils/data";
import { Link } from "react-scroll";
import ButtonComponent from "./ButtonComponent";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <header className="hero">
        <div className="section-center hero-center">
          <motion.article
            className="hero-info"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="underline" variants={itemVariants} />
            <motion.h1 variants={itemVariants}>i'm bliss</motion.h1>
            <motion.h4 variants={itemVariants}>
              freelance frontend developer with communication skills
            </motion.h4>
            <motion.div variants={itemVariants}>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <ButtonComponent name="hire me" styleAdd="hero-btn" />
              </Link>
            </motion.div>
            <motion.ul
              className="social-icons hero-icons"
              variants={itemVariants}
            >
              {socialIcons.map((icon, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={icon.href} target="_blank" className="social-icon">
                    {icon.icon}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
          <motion.article
            className="hero-img"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <AnimatedBackground className="hero-photo" />
          </motion.article>
        </div>
      </header>
    </div>
  );
};

export default Hero;
