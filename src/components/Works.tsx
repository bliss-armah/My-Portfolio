import { works } from "../utils/data";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { useEffect } from "react";

const Works = () => {


  const getProducts = async () => {
    try {
      const response = await fetch('https://portfolio-ix0m.onrender.com/api/v1/project');
      const data = await response.json();
      console.log(data); // Do something with the parsed data
  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
      <section className="section projects">
        <div className="section-title">
          <h2>latest works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            In this section, you'll get an exciting glimpse into the diverse
            range of projects I've worked on. Each project represents a unique
            opportunity for me to explore and apply my skills, pushing the
            boundaries of creativity and innovation. As you browse through the
            showcased projects, you'll find a captivating selection of visually
            stunning and highly functional websites and web applications.
            I've poured my passion into crafting exceptional user interfaces and
            seamless user experiences. When you click on a project, you'll be
            seamlessly redirected to its dedicated project page. You'll
            also have the chance to explore the project in-depth, experiencing
            its interactive elements firsthand. Prepare to be inspired as you
            embark on a journey through my latest works. Whether you're a fellow
            developer seeking inspiration, a potential client evaluating my
            capabilities, or simply an enthusiast of cutting-edge web design,
            this section will provide a captivating overview of my recent
            accomplishments in the ever-evolving world of frontend development.
          </p>
        </div>
        <div className="section-center projects-center ">
          {works.map((project) => (
            <a href={project.url} target="_blank"  className={project.className} key={project.id}>
              <article className="project shadow-lg">
                <img
                  src={project.image}
                  alt="single project"
                  className="project-img"
                />
                <div className="project-info">
                  <h4 className="font-bold">{project.title}</h4>
                  <p>{project.client}</p>
                </div>
              </article>
            </a>
          ))}
        </div>
        <div className="section-title mt-5">
          <Link to="/projects" >
        <ButtonComponent name="view all projects" styleAdd="hero-btn"/>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Works;
