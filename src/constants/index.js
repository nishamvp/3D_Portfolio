import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  expressJS,
  viteJS,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  firebase,
  Techmindz,
  Al_Bataeh_Logo,
  mobileStore,
  purchaseFlow,
  olx,
  Al_Bataeh_CHC,
  threejs,
  albataehWebsite,
  jon,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "NodeJS Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "expressJS",
    icon: expressJS,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "viteJS",
    icon: viteJS,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Techmindz",
    icon: Techmindz,
    iconBg: "#fefefe",
    date: "October 2022 - February 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Coordinated with designers to create clean interfaces and simple, intuitive interactions and experiences",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Al-Bataeh Muncipality(Freelancer)",
    icon: Al_Bataeh_Logo,
    iconBg: "#fefefe",
    date: "February 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using Nodejs and other related technologies.",
      "Collaborated with clients to develop and maintain web projects,ensuring effective communication and understanding of project requirements.",
      "Demonstrated strong project management skills, delivering high-quality web solutions on time while actively incorporating client feedback and addressing their needs.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Jon East Digital Media",
    icon: jon,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Designed and developed a high-performance iGaming platform using Node.js with Fastify, achieving scalability and seamless data operations through Prisma ORM and PostgreSQL integration.",
      "Implemented Google Two-Factor Authentication (2FA) and reCAPTCHA to enhance security, significantly reducing vulnerabilities and improving platform reliability.",
      "Created and maintained RESTful APIs, optimised middleware, and reduced server response time by 30%, ensuring efficient client-server communication.",
      "Spearheaded Agile workflows and daily stand-ups, streamlining cross-functional collaboration and reducing issue resolution time from 48 hours to 12 hours.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Al-Bathaeh Muncipality",
    designation: "CFO",
    company: "Albataeh",
    image: "/logo.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' ",
    name: "Customer Happiness Center Al-Bataeh",
    designation: "COO",
    company: "CHC Al-Bataeh",
    image: "/logo.png",
  },
  // {
  //   testimonial:
  //     "After optimizing our website, our traffic increased by 50%. We are incredibly grateful!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   // image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Purchase Flow ",
    description:
      "A role-based web application for managing internal purchase requests across departments. Employees can create requests, managers approve them, and purchase teams process and close them. Includes status tracking, automatic expiry handling, and full audit transparency to streamline procurement operations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: purchaseFlow,
    source_code_link: "https://github.com/nandakiran-r/PurchaseFlow",
  },
  {
    name: "Data Followup Web App ",
    description:
      "Developed a municipality web application using the MERN stack, with admin and user integrations, Arabic & English language support, JSPDF integration for PDF downloads, and the i18n react package for language translation without using Google Translate API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Al_Bataeh_CHC,
    source_code_link: "https://github.com/nishamvp/CHC",
  },
  {
    name: "Al Bataeh official website",
    description:
      "A modern and responsive website designed for Al Bataeh Municipality to organize and present public service information, announcements, and department details. The project was completed and handed over for internal review and deployment by the municipality’s IT team. Includes bilingual support and a clean user-friendly layout.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: albataehWebsite,
    source_code_link: "http://github.com/nishamvp/Al-Bataeh-Official-Website",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
