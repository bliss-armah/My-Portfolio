import { works } from "../utils/data";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div>
      <section className="section projects">
        <div className="section-title">
          <h2>latest works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
            magnam, earum assumenda obcaecati cum quaerat facere ratione
            molestiae dignissimos aliquid blanditiis architecto voluptates
            delectus voluptate animi nulla! Autem explicabo perspiciatis officia
            ea.
          </p>
        </div>
        <div className="section-center projects-center">
          {works.map((project) => (
            <Link to="/projects" className={project.className} key={project.id}>
              <article className="project">
                <img
                  src={project.image}
                  alt="single project"
                  className="project-img"
                />
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.client}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
