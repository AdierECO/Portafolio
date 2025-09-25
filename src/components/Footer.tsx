import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className=" w-full text-slate-300 py-6 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm font-medium"
        >
          &copy; {new Date().getFullYear()} Erick Adier Ortiz Cabrera
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
