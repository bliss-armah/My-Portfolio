import profile from "../assets/images/IMG_2368.jpg";
import about from "../assets/images/aboutme.jpg";
import { Navibar } from "../components";
import Header from "../components/Header";
const AboutPage = () => {
  return (
    <div>
      <Navibar />
      <Header name="About" classy="contact-hero -mb-[150px]" />
      <div className="section-center hero-center -mt-11">
        <article className="hero-info">
          <div className="section-title about-title">
            <h2>Communication skills</h2>
            <div className="underline"></div>
          </div>
          <p>
            As a programmer, my communication skills are vital for effective
            collaboration. I excel in conveying complex technical concepts with
            clarity, patience, and adaptability. By actively listening and
            engaging with my peers, I create an inclusive environment where
            diverse perspectives are welcomed. I leverage various communication
            channels, such as face-to-face discussions and virtual platforms, to
            ensure effective information exchange. I foster positive
            relationships, promoting a supportive atmosphere where ideas are
            shared and clarified. My communication skills as a programmer
            facilitate seamless teamwork and understanding among colleagues.
          </p>
        </article>
        <article className="hero-img">
          <img src={profile} className="hero-photo" alt="john doe" />
        </article>
      </div>
      <section className="section about -mt-40">
        <div className="section-center about-center">
          <article className="about-img">
            <img src={about} className="hero-photo" alt="about img" />
          </article>
          <article className="about-info">
            <div className="section-title about-title">
              <h2>collaboration skills</h2>
              <div className="underline"></div>
            </div>
            <p>
              I am an engaged team member, contributing actively and effectively
              communicating with my peers. I excel in adapting to different
              perspectives, valuing diverse ideas, and working towards shared
              goals. By leveraging the strengths and expertise of each team
              member, we foster creativity, innovation, and problem-solving. I
              am skilled in coordinating tasks, delegating responsibilities, and
              maintaining efficient communication channels. Furthermore, I
              promote a supportive and inclusive environment, where everyone
              feels encouraged to contribute and exchange ideas. The picture
              captures a moment of successful collaboration, exemplifying my
              ability to collaborate harmoniously with fellow programmers,
              resulting in increased productivity and successful outcomes.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
