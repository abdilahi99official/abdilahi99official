//page.js(homepage)-entry point for the app.
"use client"; //To ensure this file is treated as a client-side component.

// Importing necessary components and libraries.
import HomeSection from '../components/HomeSection'; 
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import SocialMedia from "../components/SocialMedia.js";
import React from "react";
import Link from "next/link";


// Main function for the homepage.
export default function HomePage() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 shadow-lg z-10">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="#projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>

      {/* Main sections */}
      <div className="pt-16">
        <HomeSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
        <SocialMedia />
      </div>
    </div>
  );
}
