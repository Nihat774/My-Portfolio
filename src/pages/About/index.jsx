import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200"
      initial={{ opacity: 0 }} // Başlanğıcda şəffaf
      animate={{ opacity: 1 }} // Görünür olma
      transition={{ duration: 1 }} // 1 saniyə ərzində
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center p-8 space-y-8 md:space-y-0">
        {/* Sol tərəfdəki mətn */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }} // Başlanğıcda sol tərəfdə və şəffaf
          animate={{ x: 0, opacity: 1 }} // Sıfırlandıqda görünür
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
            initial={{ y: -50, opacity: 0 }} // Başlanğıcda yuxarıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ y: 20, opacity: 0 }} // Başlanğıcda aşağıda və şəffaf
            animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I’m Nihat, a passionate Front-end Developer with a love for creating
            user-friendly and beautiful websites. I specialize in HTML, CSS,
            JavaScript, React, and other web technologies. My goal is to deliver
            high-quality code that provides seamless user experiences.
          </motion.p>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <motion.a
                download
                href="src/assets/Nihat Məmmədov CV(2).docx"
                className="px-8 py-3 border-green-600 bg-green-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-green-500 hover:shadow-xl transition-all duration-300 ease-in-out"
                initial={{ scale: 0.8, opacity: 0 }} // Başlanğıcda kiçik və şəffaf
                animate={{ scale: 1, opacity: 1 }} // Böyüyərək görünür
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Download CV
              </motion.a>
            </div>
            <motion.button
            onClick={()=>navigate("/contact")}
              className="py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-500 text-lg font-medium rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              initial={{ scale: 0.8, opacity: 0 }} // Başlanğıcda kiçik və şəffaf
              animate={{ scale: 1, opacity: 1 }} // Böyüyərək görünür
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Contact me
            </motion.button>
          </div>
        </motion.div>

        {/* Sağ tərəfdəki şəkil */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }} // Başlanğıcda sağ tərəfdə və şəffaf
          animate={{ x: 0, opacity: 1 }} // Sıfırlandıqda görünür
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://via.placeholder.com/350"
            alt="Profile"
            loading="lazy"
            className="w-96 h-96 rounded-[20px] border-4 border-indigo-600 shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
