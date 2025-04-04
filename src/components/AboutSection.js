"use client";//To ensure this file is treated as a client-side component.

import { motion } from 'framer-motion';
import React from "react";
import Head from "next/head";
import SkillsSection from '@/components/SkillSection';

// Main function for the About section of the portfolio page.
export default function AboutPage() {
  return (
   <section id="about" className="h-screen bg-[url(/images/Coding.jpg)] text-white flex items-center justify-center border-0 shadow-lg rounded-lg mt-60">
    <div className="bg-blue-300 dark:bg-grey-700 text-black dark:text-white min-h-screen p-10  border-0 shadow-lg rounded-lg">
      <Head>
        <title className="text-center">About Me</title>
        <meta name="description" content="Learn more about my background, skills, and interests." />
      </Head>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-black">About Me</h1>
        
        {/*Intro*/}
        <section className="mb-6">
          <p className="text-lg font-medium mb-2 text-center text-black">
          A passionate Software Developer with a keen interest in AI/ML and web development.
          I enjoy solving complex problems and building efficient, scalable applications.
          </p>
        </section>
        
        <hr className="border-t border-2  border-blue-950 w-full" />
        {/*Education*/}
        <section className="mb-6">
          <h2 className="text-4xl font-semibold mb-4 text-center mt-5">Education</h2>
          <p className="text-lg font-medium mb-2 text-center">B.Sc. in Computer Science - University Of Nairobi - Present Year 3.</p>
          <p className="text-lg font-medium mb-2 text-center">Software Development Course - PLP Africa Program - Currently Pursuing.</p>
        </section>
        <hr className="border-t border-2  border-blue-950 w-full" />
        {/*Skills*/}
        <SkillsSection />
        <hr className="border-t border-2 border-blue-950 w-full mt-4" />
        {/*Interests*/}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-center mt-4">Interests</h2>
          <p className="text-lg">
            I like staying abreast with emerging tech trends and working on AI-driven projects.
          </p>

        </section>

        {/*Download CV button*/}
        <div className="flex justify-center mt-6">
        <motion.a
         href="abdilahi_cv.pdf"
         download
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition">
         Download CV
        </motion.a>
       </div>
      </div>
    </div>
    </section>
    

  
  
   

  );
}
