import { motion } from "framer-motion";
import { works } from "../utils/data";
import { FaHome } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import imageSmall from "../assets/images/hero-img-small.jpeg";

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <section className="section blog">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Projects</h1>
          <div className="underline"></div>
          <p
            style={{
              color: "var(--clr-grey-5)",
              maxWidth: "600px",
              margin: "1rem auto",
            }}
          >
            A showcase of my recent work — from interactive web apps to
            full-stack platforms.
          </p>
        </motion.div>
        <motion.div
          className="section-center blog-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {works.map((project) => (
            <motion.div
              className="card shadow"
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="card-side card-front">
                <img src={project.image} alt={project.title} />
                <div className="card-info">
                  <h4 className="font-bold">{project.title}</h4>
                  <p>{project.content}</p>
                  <div className="card-footer">
                    <img src={imageSmall} alt="author" />
                    <p>{project.duration}</p>
                  </div>
                </div>
              </div>
              <div className="card-side card-back">
                <article className="single-project">
                  <div className="project-container">
                    <img src={project.image} alt={project.title} />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon"
                    >
                      <FaHome />
                    </a>
                  </div>
                  <div className="project-details">
                    <h4 className="font-bold">{project.title}</h4>
                    <p>{project.client}</p>
                    <p>{project.content}</p>
                    <div className="project-footer">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        source code
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
