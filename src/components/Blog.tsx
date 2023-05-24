import imageSmall from "../assets/images/hero-img-small.jpeg";
import { projects } from "../utils/data";


const Blog = () => {


  return (
    <div>
      <section className="section blog">
        <div className="section-title">
          <h2>blog</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center blog-center">
          {projects.map((project) => (
            <div className="card" key={project.id}>
              <div className="card-side card-front">
                <img src={project.image} alt="" />
                <div className="card-info">
                  <h4>{project.title}</h4>
                  <p>{project.content}</p>
                  <div className="card-footer">
                    <img src={imageSmall} alt="author image" />
                    <p>{project.readTime}</p>
                  </div>
                </div>
              </div>
              <div className="card-side card-back">
                <button className="btn">read more</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
