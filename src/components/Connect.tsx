import { motion } from "framer-motion";
import connectVideo from "../assets/videos/connect.mp4";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

const Connect = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section className="connect">
        <video
          controls
          autoPlay
          muted
          loop
          className="video-container"
          poster=""
        >
          <source src={connectVideo} type="video/mp4" />
          sorry, your browser does not support embedded videos
        </video>
        <motion.div
          className="video-banner"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </motion.div>
          <motion.p
            className="video-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Ready to bring your ideas to life? I'd love to hear about your
            project and discuss how we can work together to create something
            amazing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link to="/contact">
              <ButtonComponent name="contact me" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Connect;
