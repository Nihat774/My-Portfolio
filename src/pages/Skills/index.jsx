import React from "react";
import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";
import { Helmet } from "react-helmet";

const skillsData = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    description: "Structure of the web.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    description: "Styling and layouts.",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-teal-500" />,
    description: "Utility-first CSS framework.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500" />,
    description: "Interactive web development.",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-blue-400" />,
    description: "Modern UI library.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    description: "Typed superset of JS.",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600" />,
    description: "Responsive CSS framework.",
  },
  {
    name: "Sass",
    icon: <FaSass className="text-pink-400" />,
    description: "CSS preprocessor for flexibility.",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-500" />,
    description: "State management for modern apps.",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" />,
    description: "Version control & collaboration.",
  },
];

const Skills = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>My Skills</title>
        <meta name="description" content="This is my skills page" />
      </Helmet>
      <div className="w-11/12 max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
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
