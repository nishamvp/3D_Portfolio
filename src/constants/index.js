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
  olx,
  Al_Bataeh_CHC,
  threejs,
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
    title: "Web Developer",
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
    title: "Content Creator",
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
    date: "February 2023 - Present",
    points: [
      "Developing and maintaining web applications using Nodejs and other related technologies.",
      "Collaborated with clients to develop and maintain web projects,ensuring effective communication and understanding of project requirements.",
      "Demonstrated strong project management skills, delivering high-quality web solutions on time while actively incorporating client feedback and addressing their needs.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Albataeh",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' ",
    name: "Chris Brown",
    designation: "COO",
    company: "ABC Info",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After optimizing our website, our traffic increased by 50%. We are incredibly grateful!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mobile-eStore ",
    description:
      "I successfully designed and developed a feature-rich mobile-store web application, equipped with user roles (admin and users), seamless cart management, and efficient order processing. Additionally, I integrated secure payment gateways like PayPal and Razorpay for smooth online transactions.",
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
    image: mobileStore,
    source_code_link: "https://github.com/nishamvp/e-commerce-site",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "OLX-Clone",
    description:
      "  I created an OLX clone using React JS and Firebase, implementing the React Context API for optimized state management. The application offers users a seamless experience while providing functionalities like  efficient state handling through the Context API.",
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
    image: olx,
    source_code_link: "https://github.com/nishamvp/React_tutorial_olx_clone",
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
