import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { SiAngular, SiHtml5, SiBootstrap, SiTailwindcss, SiGnubash, SiFlutter, SiDart } from 'react-icons/si';
import { useLanguage } from '../context/useLanguage';

// Importar imágenes (asegúrate de tener estas imágenes en tu carpeta src/assets/)
import JavaScriptIcon from '../assets/technologies/JS.png';
import TypeScriptIcon from '../assets/technologies/TS.png';
import PHPIcon from '../assets/technologies/PHP.png';
import JavaIcon from '../assets/technologies/JAVA.png';
import CSharpIcon from '../assets/technologies/CS.png';
import PythonIcon from '../assets/technologies/PYTHON.png';
import SQLIcon from '../assets/technologies/SQL.png';
import GitHubIcon from '../assets/technologies/GITHUB.png';
import GitIcon from '../assets/technologies/GIT.jpeg';
import PostmanIcon from '../assets/technologies/POST.png';
import ReactIcon from '../assets/technologies/REACT.png';
import ReactNativeIcon from '../assets/technologies/react.svg';
import NodeIcon from '../assets/technologies/node.png';
import ExpressIcon from '../assets/technologies/express-js.png';
import PrismaIcon from '../assets/technologies/PRISMA.png';
import SQLServerIcon from '../assets/technologies/sqlserver.png';
import MySQLIcon from '../assets/technologies/mysql.png';
import OracleIcon from '../assets/technologies/Oracle_Cloud.jpg';
import SupabaseIcon from '../assets/technologies/supabase.png';
import BitbucketIcon from '../assets/technologies/bitbucket.png';
import MongoIcon from '../assets/technologies/mongodb.png';

interface CertificationBase {
  issuer: string;
  year: string;
  credentialId?: string;
  credentialUrl: string;
  showCredential: boolean;
}

const certifications: CertificationBase[] = [
  {
    issuer: 'Cisco',
    year: 'Nov 2024',
    credentialUrl: 'https://www.credly.com/badges/62a30848-88b6-4683-add3-fa8c2c423d05',
    showCredential: true
  },
  {
    issuer: 'Cisco',
    year: 'Apr 2024',
    credentialUrl: 'https://www.credly.com/badges/c072c1ef-d945-4cd3-8b02-fb28cbe2092d',
    showCredential: true
  },
  {
    issuer: 'Cisco',
    year: 'Aug 2023',
    credentialUrl: 'https://www.credly.com/badges/58e4f516-bd3d-4d99-b954-dad8c739ce5c',
    showCredential: true
  },
  {
    issuer: 'Capacítate para el Empleo',
    year: 'Mar 2025',
    credentialId: 'a0d77b50-9797-4f68-83d1-c9023522df4d',
    credentialUrl: 'https://capacitateparaelempleo.org/verifica/94033fd4-3605-4c37-8344-c68998d5004f/a0d77b50-9797-4f68-83d1-c9023522df4d',
    showCredential: true
  },
  {
    issuer: 'Capacítate para el Empleo',
    year: 'Jun 2024',
    credentialId: 'b4b2d6f3-06a3-4c14-94cf-a032de0afd53',
    credentialUrl: 'https://capacitateparaelempleo.org/verifica/94033fd4-3605-4c37-8344-c68998d5004f/b4b2d6f3-06a3-4c14-94cf-a032de0afd53',
    showCredential: true
  },
  {
    issuer: 'Capacítate para el Empleo',
    year: 'Jul 2023',
    credentialId: '3face53e-609b-4e83-beae-771c6a397178',
    credentialUrl: 'https://capacitateparaelempleo.org/verifica/94033fd4-3605-4c37-8344-c68998d5004f/3face53e-609b-4e83-beae-771c6a397178',
    showCredential: true
  },
  {
    issuer: 'Capacítate para el Empleo',
    year: 'Nov 2022',
    credentialId: '0027b518-415c-484a-999b-03383f857714',
    credentialUrl: 'https://capacitateparaelempleo.org/verifica/94033fd4-3605-4c37-8344-c68998d5004f/0027b518-415c-484a-999b-03383f857714',
    showCredential: true
  },
  {
    issuer: 'Google Actívate',
    year: 'Mar 2022',
    credentialId: '181543318',
    credentialUrl: 'https://skillshop.exceedlms.com/student/award/nyUNcwm2r8ShePozpdpLgiGt',
    showCredential: true
  },
];

interface Skill {
  name: string;
  icon: string | IconType;
  color?: string;
}

const skillCategories: { skills: Skill[] }[] = [
  {
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ]
  },
  {
    skills: [
      { name: "React Native", icon: ReactNativeIcon },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ]
  },
  {
    skills: [
      { name: "Node.js", icon: NodeIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "Prisma", icon: PrismaIcon },
      { name: "PHP", icon: PHPIcon },
      { name: "Java", icon: JavaIcon },
      { name: "C#", icon: CSharpIcon },
      { name: "Python", icon: PythonIcon },
    ]
  },
  {
    skills: [
      { name: "SQL", icon: SQLIcon },
      { name: "SQL Server", icon: SQLServerIcon },
      { name: "MySQL", icon: MySQLIcon },
      { name: "Mongo", icon: MongoIcon },
      { name: "Oracle Cloud", icon: OracleIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ]
  },
  {
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GitHubIcon },
      { name: "Bitbucket", icon: BitbucketIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    ]
  }
];

const About: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCertification, setSelectedCertification] = useState<(CertificationBase & { name: string }) | null>(null);

  const handleShowCredential = (cert: CertificationBase, name: string) => {
    if (cert.credentialUrl) {
      window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedCertification({ ...cert, name });
    }
  };

  const closeModal = () => {
    setSelectedCertification(null);
  };

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.about.heading.pre}<span className="text-blue-400">{t.about.heading.highlight}</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t.about.journeyTitle}</h3>

            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-slate-300 ${index < t.about.paragraphs.length - 1 ? 'mb-6' : ''}`}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{t.about.academicTitle}</h3>

            <div className="space-y-6">
              {t.about.academic.map((entry, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold">{entry.degree}</h4>
                  <p className="text-slate-300">{entry.school}</p>
                  <p className="text-slate-400 text-sm">{entry.status}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sección de Habilidades Técnicas */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="text-blue-400">{t.about.skillsHeading.highlight}</span>{t.about.skillsHeading.post}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                }}
              >
                <h4 className="text-xl font-semibold text-blue-400 mb-4">{t.about.skillCategories[categoryIndex]}</h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="text-slate-300 flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-50"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                        {typeof skill.icon === 'string' ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <skill.icon className="w-5 h-5" style={skill.color ? { color: skill.color } : undefined} />
                        )}
                      </div>
                      <span className="text-sm">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sección de Certificaciones */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t.about.certificationsHeading.pre}<span className="text-blue-400">{t.about.certificationsHeading.highlight}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {t.about.certificationNames[index]}
                    </h4>
                    <p className="text-blue-400 text-sm">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-slate-400 text-xs mt-1">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-slate-400 text-sm">{cert.year}</span>
                  {cert.showCredential && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShowCredential(cert, t.about.certificationNames[index]);
                      }}
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center transition-colors group-hover:underline"
                    >
                      {t.about.viewCredential}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal para mostrar credenciales */}
        {selectedCertification && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-slate-800 rounded-xl p-6 max-w-md w-full border border-slate-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{t.about.modal.titlePrefix}{selectedCertification.name}</h3>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                <p><span className="text-blue-400 font-medium">{t.about.modal.issuerLabel}</span> {selectedCertification.issuer}</p>
                <p><span className="text-blue-400 font-medium">{t.about.modal.yearLabel}</span> {selectedCertification.year}</p>
                {selectedCertification.credentialId && (
                  <p><span className="text-blue-400 font-medium">{t.about.modal.idLabel}</span> {selectedCertification.credentialId}</p>
                )}
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                >
                  {t.about.modal.close}
                </button>
                {selectedCertification.credentialUrl && (
                  <button
                    onClick={() => window.open(selectedCertification.credentialUrl, '_blank', 'noopener,noreferrer')}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    {t.about.modal.viewOfficial}
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;