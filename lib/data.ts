import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FoodVilla from "@/public/FoodVilla.png";
import AdvancedYoutubee from "@/public/AdvancedYoutubee.png";
import KiraMovie from "@/public/KiraMovie.png";
import html from '@/public/html.png';
import express from '@/public/express.png';
import firebase from '@/public/Firebase.png';
import framer from '@/public/framer.png';
import github from '@/public/github.png';
import figma from '@/public/figma.png';
import node from '@/public/node-js.png';
import oracle from '@/public/oracle.svg';
import mysql from '@/public/mysql.png';
import react from '@/public/react.png';
import mui from '@/public/mui.png';
import next from '@/public/next.png';
import tailwind from '@/public/tailwind.png';
import ts from '@/public/ts.png';
import js from '@/public/js.png';
import redux from '@/public/redux.png';
import reactquery from '@/public/reactquery.png';

export const links = [
  {
    name: "Home",
    hash: "#home",  
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech Graduate",
    location: "Assam University, Silchar, Assam 788011",
    description:
      "Completed B.Tech with a strong foundation in Computer Science & Engineering fundamentals. Focused heavily on frontend and ML during this period.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Machine Learning Intern",
    location: "Technex, IIT BHU (Remote)",
    description:
      "Built a real estate price prediction model using Linear Regression and GridSearchCV. Achieved 0.818 accuracy.",
    
    date: "June 2022 – July 2022",
  },
  {
    title: "Web Development Trainee",
    location: "NIELIT (Remote)",
    description:
      "Built a responsive music player using HTML, CSS, and JS. Learned core frontend basics and DOM handling.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 – June 2021",
  },
  /*{
    title: "Software Development Intern",
    location: "Doodhvale Farms Pvt. Ltd. (Remote)",
    description:
      "Worked on internal dashboards using React and Tailwind. Gained hands-on experience in Git, reusable components, and sprint planning.",
    icon: React.createElement(FaReact),
    date: "March 2024 – May 2024",
  }*/,
  {
    title: "Assistant System Engineer",
    location: " Tata Consultancy Services (TCS).  Kolkata,West Bengal",
    description:
      /*"Built 15+ production apps using React, Next.js, and Tailwind. Handled APIs, state with Redux Toolkit, and deployed via Vercel.",*/
      " • Database Management: Managing and integrating databases.Experienced with MySQL,MSSQL, for efficient data storage and querying. •Developed Linux shell scripts to automate routine tasks- Web Server Technologies: Familiar with IIS, Apache,Tomcat, and related server environments,                                                        .        • DevOps Monitoring: Knowledgeable in Zabbix, and shell scripting to streamline deployments and monitor performance.",
    icon: React.createElement(FaReact),
    date: "June 2024 – Present",
  }, 
] as const;

export const projectsData = [
  {
    title: "Advanced Youtube",
    description:
      "Advanced Youtube App with live chat and infinite scroll feature for your viewing pleasure",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: AdvancedYoutubee,
    sourceCode:"https://github.com/Adarshkrtiwar/you_tube.git",
    liveDemo:"https://github.com/Mehtaraju"
  },
  {
    title: "FoodHub App",
    description:
      "Food Hub App using React.js and Parcel Bundle",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: FoodVilla,
    sourceCode:"https://github.com/Mehtaraju",
    liveDemo:"https://github.com/Mehtaraju"
  },
  {
    title: "Kira Movie",
    description:
      "Explore movies with ease using my React Movie Browsing Project! 🎬 Discover, click, watch – simple and snappy! 🚀🌟",
    tags: ["React", "Redux", "IMDB API", "Tailwind", "Framer"],
    imageUrl: KiraMovie,
    sourceCode:"https://github.com/Mehtaraju",
    liveDemo:"https://github.com/Mehtaraju"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;


export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: html,
    width: 40,
    height: 40,
  },
  
   {
    skill_name: "Java Script",
    Image: js,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Material UI",
    Image: mui,
    width: 40,
    height: 40,
  },
  {
    skill_name: "React",
    Image: react,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 40,
    height: 40,
  },
  {
    skill_name: "React Query",
    Image: reactquery,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Type Script",
    Image: ts,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Next js 13",
    Image: next,
    width: 40,
    height: 40,
  }, 
];

 export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: node,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Express js",
    Image: express,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Oracle",
    Image: oracle,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: firebase,
    width: 40,
    height: 40,
  },
  {
    skill_name: "My SQL",
    Image: mysql,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Github",
    Image: github,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Figma",
    Image: figma,
    width: 40,
    height: 40,
  },

];