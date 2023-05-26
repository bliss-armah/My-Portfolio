import { socialIcons } from '../utils/data'
import profile from "../assets/images/IMG_2368.jpg";
import { Link } from "react-scroll";
import ButtonComponent from './ButtonComponent';

const Hero = () => {
  return (
    <div>
        <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>i'm bliss</h1>
            <h4>freelance frontend developer with communication skills</h4>
            <Link 
              activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <ButtonComponent name="hire me" styleAdd='hero-btn'/>
              </Link>
            <ul className="social-icons hero-icons">
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <a href={icon.href} target="_blank" className="social-icon">
                    {icon.icon}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article className="hero-img">
            <img src={profile} className="hero-photo" alt="john doe" />
          </article>
        </div>
      </header>
    </div>
  )
}

export default Hero