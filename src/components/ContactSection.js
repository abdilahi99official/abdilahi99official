
"use client";

import React, { useState } from "react";
import Head from "next/head";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
    };
  
    return (
    <section id="contact" className="h-screen bg-blue-800 text-white flex items-center justify-center rounded-lg shadow-md">
     
        <Head>
          <title>Contact Me - My Portfolio</title>
          <meta name="description" content="Get in touch with me for collaborations or inquiries." />
        </Head>
  
        <div className="max-w-2xl w-full bg-black dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Get In Touch</h1>
          <p className="text-lg text-center mb-6">Feel free to reach out for collaborations, job opportunities, or just to say hi!</p>
          
          {submitted ? (
            <p className="text-green-500 text-center">Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-medium">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700" required />
              </div>
              <div>
                <label className="block text-lg font-medium">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700" required />
              </div>
              <div>
                <label className="block text-lg font-medium">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-2 border rounded dark:bg-gray-700" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-500 transition">
                Send Message
              </button>
            </form>
          )}
        </div>
       
    
    </section>
    );
     
  }
  