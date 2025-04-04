// components/SocialMedia.js

"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    url: "https://github.com/abdilahi99official",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/abdilah-ahmed-63338820a/",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    url: "https://x.com/abdilahi99dev",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    url: "https://www.instagram.com/abdilahi99official",
  },
];

const SocialMedia = () => {
  return (
    <section id="socials" className="py-10 bg-blue-200 dark:bg-gray-900 text-center rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect with Me On</h2>
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-600 dark:text-white hover:text-indigo-500 transition-transform transform hover:scale-110"
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
