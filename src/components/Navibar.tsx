import {useState,useEffect} from "react";
import logo from "../assets/images/Bliss Qodes.svg";
import { FaBars } from "react-icons/fa";
import Aside from "./Aside";
import { NavLink } from "react-router-dom";

const Navibar = () => {
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    setShow(!show);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#nav");
      if (window.pageYOffset > 85) {
        navbar?.classList.add("navbar-fixed");
      } else {
        navbar?.classList.remove("navbar-fixed");
      }
    };
    window.addEventListener("scroll", handleScroll);
  
  }, []);

  return (
    <div className="shows">
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <a href="/">
              <img src={logo} className="nav-logo w-[230px]" alt="nav logo" />
            </a>
            <button className="nav-btn" id="nav-btn" onClick={showSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <NavLink to={"/about"}>about</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>projects</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {show && <Aside show={setShow} />}
    </div>
  );
};

export default Navibar;
