// src/components/SkillSection.jsx
'use client';

import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
  'Tailwind CSS', 'Node.js', 'MYSQL',
  'Python', 'Machine Learning',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillSection() {
  return (
    <section id="skills" className="min-[5]:: bg-blue-300 text-black py-1 px-1 text-center border-0 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold mb-12">My Skills</h2>
      
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-0 shadow-lg rounded-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-4 border border-white rounded-lg hover:bg-white transition"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
