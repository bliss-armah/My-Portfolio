import { FaTimes } from "react-icons/fa";
import { socialIcons } from "../utils/data";
import { NavLink } from "react-router-dom";


interface asideProp {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}
const SmallAside = ({ show }: asideProp) => {
  return (
    <div>
        <aside className="sidebar show-sidebar" id="sidebar">
        <div>
          <button
            className="close-btn"
            id="close-btn"
            onClick={() => show(false)}
          >
            <FaTimes />
          </button>
          <ul className="sidebar-links">
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
          <ul className="social-icons">
            {socialIcons.map((icon, index) => (
              <li key={index}>
                <a href={icon.href} target="_blank" className="social-icon">
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default SmallAside