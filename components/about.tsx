"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
   const { ref } = useSectionInView("About");

  return (
    <motion.section
       ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 text-gray-950 dark:text-cyan-200">
        {" "}
        {" "}
        <span className="font-medium highlight"></span>I am currently working as an Assistant System Engineer at 
        Tata Consultancy Services (TCS), based in Kolkata, West Bengal, with hands-on experience as a
          <span className="font-medium highlight"> Database Administrator (DBA).</span>  I have 1 year of 
          experience in the IT industry, specializing in frontend development and database management. 
          My technical skill set includes {" "}
        <span className="italic highlight">JavaScript, React, Node.js, Next.js, MySQL, and MSSQL.</span> and solve{" "}
        <span className="underline highlight">real-world problems</span>. {" "}
        <span className="font-medium highlight">
      
        </span>
        . I am also familiar with Typescript,Tailwind CSS. I am always eager to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium highlight">full-time position</span> as a web
        developer, Database Administrator (DBA) & Data Analyst.
      </p>

      <p className="text-gray-950 dark:text-cyan-200">
        <span className="italic highlight">When I'm not coding</span>, I enjoy playing games,
        watching movies, and new AI tool research. I also enjoy{" "}
        <span className="font-medium highlight">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium highlight">
          artificial intelligence and machine learning
        </span>
        . I'm also learning how to 10x my productivity using AI.
      </p>
    </motion.section>
  );
}
