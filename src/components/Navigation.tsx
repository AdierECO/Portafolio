import React from 'react';
import { motion } from 'framer-motion';
import type { NavigationItem } from '../types';

const Navigation: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    { name: 'Inicio', href: '/', target: '_self' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Contacto', href: '/contact' },
  ];

  const handleNavigation = (href: string, target?: string) => {
    if (target === '_blank') {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 py-6 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavigation('/', '_self')}
        >
          <span className="text-blue-400">DEV</span> 
          <span className="text-slate-300">JUNIOR</span>
        </motion.div>
        
        <ul className="hidden md:flex space-x-8">
          {navigationItems.map((item, index) => (
            <motion.li 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleNavigation(item.href, item.target)}
                className="text-slate-400 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer text-base font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-slate-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;