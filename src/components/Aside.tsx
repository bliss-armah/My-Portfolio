import { FaTimes } from "react-icons/fa";
import { socialIcons } from "../utils/data";
import { Link } from "react-scroll";

interface asideProp {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}
const Aside = ({ show }: asideProp) => {
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
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => show(false)}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => show(false)}
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => show(false)}
              >
                contact
              </Link>
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
  );
};

export default Aside;
