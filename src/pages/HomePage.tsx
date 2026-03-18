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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Skills />
      <Timeline />
      <Connect />
    </div>
  );
};

export default HomePage;
