import React from "react";
import { motion } from "framer-motion"; // Framer Motion'u import et
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, description: "Structure of the web." },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, description: "Styling and layouts." },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" />, description: "Utility-first CSS framework." },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" />, description: "Interactive web development." },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, description: "Modern UI library." },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, description: "Typed superset of JS." },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, description: "Responsive CSS framework." },
  { name: "Sass", icon: <FaSass className="text-pink-400" />, description: "CSS preprocessor for flexibility." },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" />, description: "Version control & collaboration." },
];

const Skills = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12"
      initial={{ opacity: 0 }} // Başlangıçda görünməz
      animate={{ opacity: 1 }} // Görünür olma
      transition={{ duration: 1 }} // 1 saniyə ərzində
    >
      <div className="w-11/12 max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-12"
          initial={{ y: -100, opacity: 0 }} // Başlangıçda yuxarıda və şəffaf
          animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }} // Başlangıçda şəffaf
          animate={{ opacity: 1 }} // Görünməz olmaqdan görmək
          transition={{ duration: 1 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
              initial={{ y: 50, opacity: 0 }} // Başlangıçda yuxarıda və şəffaf
              animate={{ y: 0, opacity: 1 }} // Görünür olma
              transition={{ duration: 0.8, delay: index * 0.2 }} // Hər bir elementin görünməsinə gecikmə
            >
              <div className="text-5xl">{skill.icon}</div>
              <h2 className="mt-4 text-xl font-semibold text-gray-700">
                {skill.name}
              </h2>
              <p className="text-gray-600 text-sm text-center mt-2">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
