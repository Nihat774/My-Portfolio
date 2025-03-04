import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
const ProjectsPage = () => {
  const loc = useLocation();
  const [data,setData] = useState() 
  useEffect(()=>{
    const url = import.meta.env.VITE_API_URL1;
   
    fetch(url)
    .then((res)=>res.json())
    .then(data=>setData(data))
  },[])
  console.log(data);
  
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }} // Başlanğıcda şəffaf
      animate={{ opacity: 1 }} // Görünür olma
      transition={{ duration: 1 }} // 1 saniyə ərzində
    >
      <Helmet>
        <title>My Projects</title>
        <meta name="description" content="This is my projects page" />
      </Helmet>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-14"
        initial={{ y: -100, opacity: 0 }} // Başlanğıcda yuxarıda və şəffaf
        animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }} // Başlanğıcda şəffaf
        animate={{ opacity: 1 }} // Görünür olma
        transition={{ duration: 1 }}
      >
        {
          data?.map((item)=>{
            return(
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
                {item.projectName}
              </motion.h3>
              <motion.p
                className="mb-4 h-12 "
                initial={{ y: 20, opacity: 0 }} // Başlanğıcda aşağıda və şəffaf
                animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {item.projectAbout}
              </motion.p>
              <Link
                to={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:underline"
                initial={{ y: 20, opacity: 0 }} // Başlanğıcda aşağıda və şəffaf
                animate={{ y: 0, opacity: 1 }} // Sıfırlandıqda görünür
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Sayta keçid
              </Link>
            </motion.div>
            )
          })
        }
 

      
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
