import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    webcode,
    shirt,
    threejs,
    Capture,
  } from "../assets";
  
  export const navLinks = [
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
// will come soon on it!
  ];
  
  const testimonials = [
// coming soon after getting a job
  ];
  
  const projects = [
    {
      name: "WebCode-Editor",
      description:
        "A sophisticated live code editor enabling developers to write HTML, CSS, and JavaScript with real-time output visualization, all within a single, integrated frame. Perfect for rapid prototyping and immediate feedback.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: webcode,
      source_code_link: "https://github.com/minahil-105/WebCode-Editor.git",
    },
    {
      name: "Accounting Software",
      description:
        "This comprehensive accounting solution simplifies financial management by offering intuitive tracking of transactions, generating detailed reports, and ensuring robust data security.",
      tags: [
        
        {
          name: ".NET",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: Capture,
      source_code_link: "https://github.com/minahil-105/Accounting-Software.git",
    },
    {
      name: "3D SHOP",
      description:
        "An innovative e-commerce platform that empowers users to personalize their apparel, including shirts and more, through an immersive 3D customization interface. It's an upcoming project, so stay tuned!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };