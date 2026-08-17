import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { useLanguage } from '../context/useLanguage';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="flex items-center justify-center pt-16 min-h-[calc(100vh-4.3rem)]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {t.hero.greeting} <span className="text-blue-400">Erick Adier Ortiz Cabrera</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {t.hero.role}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-block mr-4"
            >
              {t.hero.viewProjects}
            </Link>
            <Link
              to="/contact"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-block"
            >
              {t.hero.contactMe}
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ThreeScene />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;