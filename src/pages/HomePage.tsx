import {
  About,
  Connect,
  Services,
  Skills,
  Timeline,
  Works,
  Hero,
  Navbar,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
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
    </div>
  );
};

export default HomePage;
