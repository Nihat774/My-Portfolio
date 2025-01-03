import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }} // Başlanğıcda şəffaf
      animate={{ opacity: 1 }} // Görünür olma
      transition={{ duration: 1 }} // 1 saniyə ərzində
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ y: -100, opacity: 0 }} // Başlanğıcda yuxarıda və şəffaf
        animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0 }} // Başlanğıcda şəffaf
        animate={{ opacity: 1 }} // Görünür olma
        transition={{ duration: 1 }}
      >
        {/* Project 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-lg p-7 transition-all duration-300 ease-in-out w-full md:w-80 lg:w-96"
        >
          <motion.h3
            className="text-2xl font-semibold mb-4"
            initial={{ y: -50, opacity: 0 }} // Başlanğıcda yuxarıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5 }}
          >
            Console Game
          </motion.h3>
          <motion.p
            className="mb-4"
            initial={{ y: 20, opacity: 0 }} // Başlanğıcda aşağıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A fun console-based game, built using JavaScript.
          </motion.p>
          <motion.Link
            to="https://consolegame.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:underline"
            initial={{ y: 20, opacity: 0 }} // Başlanğıcda aşağıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Visit Project
          </motion.Link>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ease-in-out w-full md:w-80 lg:w-96"
        >
          <motion.h3
            className="text-xl font-semibold mb-4"
            initial={{ y: -50, opacity: 0 }} // Başlanğıcda yuxarıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5 }}
          >
            BDA Project
          </motion.h3>
          <motion.p
            className="mb-4"
            initial={{ y: 20, opacity: 0 }} // Başlanğıcda aşağıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A project built to demonstrate database integration and front-end skills.
          </motion.p>
          <motion.Link
            to="https://BDA-project.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:underline"
            initial={{ y: 20, opacity: 0 }} // Başlanğıcda aşağıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Visit Project
          </motion.Link>
        </motion.div>

        {/* Add more projects here */}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
