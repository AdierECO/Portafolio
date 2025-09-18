import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';

import maekaImage from '../assets/projects/MAEKA.png';
import edusphere from '../assets/projects/EDUSPHERE.png';
import contapp from '../assets/projects/CONTAPP.png';


const Projects: React.FC = () => {
  const [activeFilter] = useState<string>('todos');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'MAEKA',
      description: 'Tienda en Express.js y React para la venta de perfumes, con administración de productos, usuarios y pedidos.',
      image: maekaImage,
      technologies: ['React', 'TypeScript', 'Node.js', 'MySQL'],
      githubUrl: '#',
      links: [
        { type: 'FrontEnd', url: 'https://github.com/AxlEnr/CRUD-React' },
        { type: 'BackEnd', url: 'https://github.com/AxlEnr/CRUD-Express' }
      ]
    },
    {
      id: 2,
      title: 'EDUSPHERE',
      description: 'EduSphere es una aplicación web educativa integral diseñada para mejorar la gestión escolar en instituciones de nivel básico y medio superior. Su objetivo principal es digitalizar y optimizar procesos académicos y administrativos, facilitando la comunicación entre docentes, alumnos, padres de familia y directivos.',
      image: edusphere,
      technologies: ['PHP', 'MySQL', 'HTML', 'JavaScript'],
      githubUrl: '#',
      links: [
        { type: 'Repositorio', url: 'https://github.com/AdierECO/EDUSPHERE' }
      ]
    },
    {
      id: 3,
      title: 'CONTAPP',
      description: 'Es una aplicación web diseñada para profesores de contabilidad. Les permite compartir publicaciones y recursos educativos con sus alumnos. Los profesores pueden crear cuestionarios, publicar y actualizar sus perfiles de usuario, incluyendo cambiar su nombre de usuario y contraseña.',
      image: contapp,
      technologies: ['React', 'React Native', 'Express', 'MySQL', 'PrismaORM'],
      githubUrl: '#',
      links: [
        { type: 'FrontEnd', url: 'https://github.com/AdierECO/ContApp-web' },
        { type: 'BackEnd', url: 'https://github.com/AdierECO/ContApp-server' },
        { type: 'Móvil', url: 'https://github.com/AdierECO/ContApp-movil' }
      ]
    },
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeFilter)
        )
      );

  const handleCardClick = (projectId: number, event: React.MouseEvent) => {
    // Evitar que se active al hacer clic en los enlaces
    if ((event.target as HTMLElement).tagName === 'A') {
      return;
    }
    
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <AnimatePresence>
        {expandedProject && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedProject(null)}
          >
            <motion.div 
              className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projects
                .filter(project => project.id === expandedProject)
                .map(project => (
                  <div key={project.id} className="p-6">
                    {/* Contenedor de imagen en modal - Mantiene relación de aspecto */}
                    <div className="relative h-0 pb-[56.25%] md:pb-[45%] overflow-hidden rounded-lg mb-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-slate-400 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {project.links?.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          {link.type}
                        </a>
                      ))}
                    </div>
                    
                    <button 
                      className="mt-6 text-slate-400 hover:text-white transition-colors duration-300"
                      onClick={() => setExpandedProject(null)}
                    >
                      Cerrar
                    </button>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mis <span className="text-blue-400">Proyectos</span>
        </motion.h2>
        
        <motion.p 
          className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Aquí puedes ver algunos de mis proyectos más recientes. Cada uno representa diferentes habilidades y tecnologías que domino.
        </motion.p>

        {/* Grid de proyectos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={(e) => handleCardClick(project.id, e)}
            >
              {/* Contenedor de imagen en tarjeta - Mantiene relación de aspecto */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
                {/* Overlay para indicar que es clickeable */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.links?.slice(0, 2).map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      className="flex items-center text-slate-300 hover:text-white transition-colors duration-300 text-sm bg-slate-700 px-3 py-1 rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      {link.type}
                    </a>
                  ))}
                  {project.links && project.links.length > 2 && (
                    <span className="text-slate-400 text-sm bg-slate-700 px-3 py-1 rounded">
                      +{project.links.length - 2} más
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;