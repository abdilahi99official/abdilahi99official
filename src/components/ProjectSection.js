"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "BankLite",
    description:
      "A Fin-tech web app for college students with smart budgeting, mobile banking, and financial education.",
    image: "/images/banklite.jpg",
    link: "https://banklite.example.com",
    tags: ["Fintech", "React", "Tailwind", "Next.js"],
  },
  {
    id: 2,
    title: "Aitoolsforall.com",
    description:
      "A web platform for sharing, rating, and reviewing AI tools. Curated for creators, devs, and enthusiasts.",
    image: "/images/aitools.jpg",
    link: "https://aitoolsforall.com",
    tags: ["AI", "Community", "Next.js", "Tailwind"],
  },
  {
    id: 3,
    title: "Plant_doctor",
    description:
      "An AI-powered crop disease detection platform that helps farmers identify and manage plant health issues.",
    image: "/images/plantdoctor.jpg",
    link: "https://plantdoctor.example.com",
    tags: ["AI/ML", "Agritech", "Python", "FastAPI", "Next.js"],
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen bg-cyan-300 dark:bg-gray-900 p-10 mt-70 border-0 shadow-lg rounded-lg">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Showcasing my portfolio projects." />
      </Head>

      <div className="max-w-7xl mx-auto mt-5">
      
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">Projects</h1>
        

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition hover:scale-[1.02]"
              whileHover={{ y: -5 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-white px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={project.link} target="_blank">
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                    View Project
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </section>
  );
}
