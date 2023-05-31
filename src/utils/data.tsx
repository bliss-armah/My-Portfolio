import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsTelephone,
} from "react-icons/bs";
import project1 from "../assets/images/crypto.jpg";
import project2 from "../assets/images/jobster.jpg";
import project3 from "../assets/images/invoice.jpg";
import project4 from "../assets/images/github.jpg";
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
    image: project1,
    title: "project title 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    duration: "1 month ago",
  },
  {
    id: 2,
    image: project2,
    title: "project title 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    duration: "2 month ago",
  },
  {
    id: 3,
    image: project3,
    title: "project title 3",
    content:
      "Lorem ipsum,dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    duration: "3 month ago",
  },
  {
    id: 4,
    image: project4,
    title: "project title 4",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.",
    duration: "4 month ago",
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
      "Planning, conceptualizing, and arranging content online (responsiveness). Today, designing a website goes beyond aesthetics to include the website’s overall functionality.",
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
      { name: "Express", value: 60 },
      // { name: "Python", value: 80 },
    ],
  },
];

export const timelineItems = [
  {
    year: "2023",
    content:
      "A significant milestone was achieved as I received my first professional offer as a frontend developer, validating my capabilities and signaling a promising future in the field of web development.",
    number: "1",
  },
  {
    year: "2022",
    content:
      "Seizing the opportunity to join Amalitech through national service, I collaborated with a talented team, gaining valuable industry experience and further refining my expertise.",
    number: "2",
  },
  {
    year: "2021",
    content:
      "I embarked on a freelance career, working on a range of projects that allowed me to refine my skills and deliver customized solutions for clients.",
    number: "3",
  },
  {
    year: "2020",
    content:
      "I immersed myself in learning HTML, CSS, and React, actively enhancing my programming abilities and expanding my knowledge in web development.",
    number: "4",
  },
];

export const works = [
  {
    id: 1,
    image: project1,
    title: "Cryptocurrency Market",
    client: "Freelance Work",
    className: "project-1",
    url: "https://cryptocurrency-markets.netlify.app/landing",
    content:
      "Stay updated with trending cryptocurrencies and manage your watchlist effortlessly with our user-friendly platform.",
    duration: "1 month ago",
  },
  {
    id: 2,
    image: project2,
    title: "Jobster",
    client: "Personal Project",
    className: "project-2",
    url: "/",
    content:
      "Empower admins to effortlessly add job opportunities while enabling users to find, apply, and work on projects seamlessly.",
    duration: "2 month ago",
  },
  {
    id: 3,
    image: project3,
    title: "Invoice",
    client: "Freelance",
    className: "project-3",
    url: "https://invoice-app-amalitech.netlify.app/",
    content:
      "Effortlessly track and mark invoices with our user-friendly app, streamlining your billing process and ensuring accurate records.",
    duration: "3 month ago",
  },
  {
    id: 4,
    image: project4,
    title: "Githup Users",
    client: "Personal Project",
    className: "project-4",
    url: "https://react-github-users-search-bliss.netlify.app/",
    content:
      " Discover talented developers and explore their repositories, followers, and key information in a comprehensive chart view.",
    duration: "4 month ago",
  },
];

export const contactForm = [
  { id: 1, icon: <BsTelephone />, text: "+233245289983" },
  { id: 2, icon: <FiMail />, text: "blissarmah8@gmail.com" },
  { id: 3, icon: <GoLocation />, text: "Tarkwa, Ghana" },
];
