import { socialIcons } from "../utils/data";

const Footer = () => {
 const date = new Date().getFullYear()

  return (
    <div>
      <footer className="footer">
        <ul className="social-icons">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.href}  target="_blank" className="social-icon">
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>

        <p>
          &copy; <span>{date}</span> bliss code. all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
