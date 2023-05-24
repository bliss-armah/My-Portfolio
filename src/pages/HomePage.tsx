import {
  About,
  Connect,
  Blog,
  Services,
  Skills,
  Timeline,
  Works,
  Hero,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <Services />
      <div id="product">
        <Works />
      </div>
      <div id="contact">
        <Connect />
      </div>
      <Skills />
      <Timeline />
      <Blog />
    </div>
  );
};

export default HomePage;
