import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import Aside from "./Aside";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#nav");
      if (window.pageYOffset > 80) {
        navbar?.classList.add("navbar-fixed");
      } else {
        navbar?.classList.remove("navbar-fixed");
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="shows">
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="nav logo" />
            <button className="nav-btn" id="nav-btn" onClick={showSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                projects
              </Link>
            </li>
            <li>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {show && <Aside show={setShow} />}
    </div>
  );
};

export default Navbar;
