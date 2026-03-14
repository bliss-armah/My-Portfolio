import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsTelephone,
} from "react-icons/bs";
import project4 from "../assets/images/github.jpg";
import skuulbe from "../assets/images/skuulbe.png";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export const socialIcons = [
  {
    href: "https://www.linkedin.com/in/bliss-armah-nwanwah-5b526423a/",
    icon: <BsLinkedin />,
  },
  {
    href: "https://github.com/BlissArmah-Nwanwah",
    icon: <BsGithub />,
  },
  {
    href: "https://twitter.com/BlissAbrantie",
    icon: <BsTwitter />,
  },
  {
    href: "https://www.instagram.com/_wonderful.bliss/",
    icon: <BsInstagram />,
  },
];

export const projects = [
  {
    id: 1,
    image: project4,
    title: "GitHub Users",
    content:
      "Discover talented developers and explore their repositories, followers, and key information in a comprehensive chart view.",
    duration: "3 years ago",
  },
  {
    id: 2,
    image: skuulbe,
    title: "School Management System",
    content:
      "A comprehensive school management platform for handling student enrollment, class schedules, teacher management, and academic performance tracking.",
    duration: "A years ago",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "web development",
    description:
      "Create and maintain website in a well organize manner and enhance performance (consistency,functionality and design).",
  },
  {
    id: 2,
    icon: <FaSketch />,
    title: "web design",
    description:
      "Planning, conceptualizing, and arranging content online (responsiveness). Today, designing a website goes beyond aesthetics to include the website's overall functionality.",
  },
  {
    id: 3,
    icon: <FaAndroid />,
    title: "app design",
    description:
      "Planning, conceptualizing, and arranging content in app to help user's experience better and easy.",
  },
];

export const skillsData = [
  {
    id: 1,
    title: "front end",
    skills: [
      { name: "HTML/CSS", value: 90 },
      { name: "Javascript", value: 80 },
      { name: "React Js/Ts", value: 90 },
      { name: "NextJs", value: 80 },
    ],
  },
  {
    id: 2,
    title: "back end",
    skills: [
      { name: "Node", value: 70 },
      { name: "Node/Express", value: 80 },
    ],
  },
];

export const timelineItems = [
  {
    year: "2024",
    content:
      "Evolved into a fullstack developer with AWS Cloud Practitioner certification, expanding my expertise to include cloud architecture and deployment strategies for scalable web applications.",
    number: "1",
  },
  {
    year: "2023",
    content:
      "Achieved a significant milestone by securing my first professional role as a frontend developer, marking the beginning of my journey in building production-level applications and working with development teams.",
    number: "2",
  },
  {
    year: "2022",
    content:
      "Embarked on my national service journey, diving deep into professional software development while collaborating with experienced developers and contributing to real-world projects that impact users daily.",
    number: "3",
  },
];

export const works = [
  {
    id: 1,
    image: project4,
    title: "GitHub Users",
    client: "Personal Project",
    className: "project-1",
    url: "https://react-github-users-search-bliss.netlify.app/",
    githubUrl: "https://github.com/BlissArmah-Nwanwah",
    content:
      "Discover talented developers and explore their repositories, followers, and key information in a comprehensive chart view.",
    duration: "4 months ago",
  },
  {
    id: 2,
    image: skuulbe,
    title: "School Management System",
    client: "Freelance Work",
    className: "project-2",
    url: "https://demo.skuulbe.com/login",
    githubUrl: "https://github.com/BlissArmah-Nwanwah",
    content:
      "A comprehensive school management platform for handling student enrollment, class schedules, teacher management, and academic performance tracking.",
    duration: "6 months ago",
  },
];

export const contactForm = [
  { id: 1, icon: <BsTelephone />, text: "+233245289983" },
  { id: 2, icon: <FiMail />, text: "blissarmah8@gmail.com" },
  { id: 3, icon: <GoLocation />, text: "Tarkwa, Ghana" },
];
