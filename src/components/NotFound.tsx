import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4.3rem)] pt-16">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-blue-400 mb-4">{t.notFound.title}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.notFound.subtitle}</h2>
        <p className="text-slate-400 mb-8">{t.notFound.body}</p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-block"
        >
          {t.notFound.backLink}
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
