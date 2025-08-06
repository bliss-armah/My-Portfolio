import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import AnimatedBackground from "./AnimatedBackground";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="section about">
        <div className="section-center about-center">
          <motion.article
            className="about-img"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedBackground className="hero-photo" />
          </motion.article>
          <motion.article
            className="about-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="section-title about-title"
              variants={itemVariants}
            >
              <h2>about</h2>
              <div className="underline"></div>
            </motion.div>
            <motion.p variants={itemVariants}>
              Hello, I am Bliss Armah and I am a web developer. I live and work
              in somewhere warm. I spend most of my day, experimenting with
              HTML, CSS and JavaScript (and its endless list of frameworks). I
              enjoy coding and the challenge of learning something new everyday.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/about">
                <ButtonComponent name="about me" />
              </Link>
            </motion.div>
          </motion.article>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
