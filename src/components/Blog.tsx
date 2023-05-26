import imageSmall from "../assets/images/hero-img-small.jpeg";
import {  works } from "../utils/data";
import { FaHome } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Blog = () => {
  return (
    <div>
      <section className="section blog">
        <div className="section-title">
          <h1>Projects</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center blog-center">
          {works.map((project) => (
            <div className="card shadow" key={project.id}>
              <div className="card-side card-front">
                <img src={project.image} alt="" />
                <div className="card-info">
                  <h4 className="font-bold ">{project.title}</h4>
                  <p>{project.content}</p>
                  <div className="card-footer">
                    <img src={imageSmall} alt="author image" />
                    <p>{project.duration}</p>
                  </div>
                </div>
              </div>
              <div className="card-side card-back">
                <article className="single-project">
                  <div className="project-container">
                    <img src={project.image} alt="single project" />
                    <a href={project.url} target="_blank" className="project-icon">
                      <FaHome />
                    </a >
                  </div>
                  <div className="project-details">
                    <h4  className="font-bold ">{project.title}</h4>
                    <p>{project.content}</p>
                    <div className="project-footer">
                      <span>
                        <BsGithub />
                      </span>
                      <a href="https://www.github.com">source code</a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
