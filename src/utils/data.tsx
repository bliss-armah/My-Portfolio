import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import project1 from "../assets/images/project-1.jpeg";
import project2 from "../assets/images/project-2.jpeg";
import project3 from "../assets/images/project-3.jpeg";
import project4 from "../assets/images/project-4.jpeg";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

export const socialIcons = [
  {
    href: "https://www.facebook.com",
    icon: <BsFacebook />,
  },
  {
    href: "https://www.linkedin.com/in/bliss-armah-nwanwah-5b526423a/",
    icon: <BsLinkedin />,
  },
  {
    href: "https://www.twitter.com",
    icon: <BsTwitter />,
  },
  {
    href: "https://www.instagram.com",
    icon: <BsInstagram />,
  },
];

export const projects = [
  {
    id: 1,
    image: project1,
    title: "Article Title 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    readTime: "7 min read",
  },
  {
    id: 2,
    image: project2,
    title: "Article Title 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    readTime: "7 min read",
  },
  {
    id: 3,
    image: project3,
    title: "Article Title 3",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    readTime: "7 min read",
  },
  {
    id: 4,
    image: project4,
    title: "Article Title 4",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    readTime: "7 min read",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "web development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero.",
  },
  {
    id: 2,
    icon: <FaSketch />,
    title: "web design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero.",
  },
  {
    id: 3,
    icon: <FaAndroid />,
    title: "app design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero.",
  },
];

export const skillsData = [
  {
    id: 1,
    title: "front end",
    skills: [
      { name: "HTML/CSS", value: 80 },
      { name: "Javascript", value: 70 },
      { name: "React", value: 80 },
    ],
  },
  {
    id: 2,
    title: "back end",
    skills: [
      { name: "Node", value: 50 },
      { name: "Express", value:70 },
      // { name: "Python", value: 80 },
    ],
  },
];

export const timelineItems = [
  {
    year: "2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
    number: "1",
  },
  {
    year: "2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
    number: "2",
  },
  {
    year: "2021",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
    number: "3",
  },
  {
    year: "2020",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
    number: "4",
  },
];

export const works = [
  {
    id: 1,
    image: project1,
    title: "Project 1",
    client: "Client 1",
    className: "project-1",
  },
  {
    id: 2,
    image: project2,
    title: "Project 2",
    client: "Client 2",
    className: "project-2",
  },
  {
    id: 3,
    image: project3,
    title: "Project 3",
    client: "Client 3",
    className: "project-3",
  },
  {
    id: 4,
    image: project4,
    title: "Project 4",
    client: "Client 4",
    className: "project-4",
  },
];
