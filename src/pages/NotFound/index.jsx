import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      {/* Animation for page content */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full"
      >
        <h1 className="text-6xl font-bold text-gray-700">404</h1>
        <p className="text-2xl text-gray-500 mt-4">Oops! Page not found</p>
        <p className="text-lg text-gray-400 mt-2">The page you're looking for doesn't exist or has been moved.</p>
        
        <div className="mt-6">
          <Link 
            to="/" 
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </motion.div>     
    </section>
  );
};

export default NotFoundPage;
