import project1 from "../assets/images/project-1.jpeg";
import videoplay from "../assets/videos/connect.mp4";
import { Link } from "react-router-dom";


const Connect = () => {
  return (
    <div>
    <section className="connect">
      <video
        controls
        autoPlay
        muted
        loop
        className="video-container"
        poster={project1}
      >
        <source src={videoplay} type="video/mp4" />
        Sorry, your browser does not support embedded videos
      </video>
      <div className="video-banner">
        <div className="section-title">
          <h2>let's get in touch</h2>
          <div className="underline"></div>
        </div>
        <p className="video-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
          perferendis exercitationem sit. Beatae eius commodi officiis rem
          soluta ratione dignissimos quisquam tempore laudantium, porro vitae
          cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
          repellendus delectus nostrum veniam!
        </p>
        <Link to="/contact" className="btn">
        contact me
            </Link>
      </div>
    </section>
    </div>
  )
}

export default Connect