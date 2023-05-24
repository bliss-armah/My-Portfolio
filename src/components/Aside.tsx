import { FaTimes } from "react-icons/fa";
import { socialIcons } from "../utils/data";

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
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="projects.html">projects</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
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
