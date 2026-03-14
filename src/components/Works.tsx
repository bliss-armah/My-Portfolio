import { motion } from "framer-motion";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { works } from "../utils/data";
import { Link } from "react-router-dom";

const Works = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
      <section className="section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Latest Works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Here are some of my recent projects that showcase my skills in web
            development, from frontend interfaces to full-stack applications.
          </p>
        </motion.div>
        <motion.div
          className="section-center projects-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {works.map((project) => (
            <motion.article
              key={project.id}
              className={`project ${project.className}`}
              variants={projectVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="project-img"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="project-info"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
              >
                <h4>{project.title}</h4>
                <p>{project.content}</p>
                <div className="project-footer">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="project-icon" />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaShareSquare className="project-icon" />
                  </a>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
        <div className="flex justify-center items-center mt-5">
          <Link to="/projects" className="btn">
            All Projects
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Works;
