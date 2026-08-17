export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    heading: { pre: string; highlight: string };
    journeyTitle: string;
    paragraphs: string[];
    academicTitle: string;
    academic: { degree: string; school: string; status: string }[];
    skillsHeading: { highlight: string; post: string };
    skillCategories: string[];
    certificationsHeading: { pre: string; highlight: string };
    certificationNames: string[];
    viewCredential: string;
    modal: {
      titlePrefix: string;
      issuerLabel: string;
      yearLabel: string;
      idLabel: string;
      close: string;
      viewOfficial: string;
    };
  };
  projectsPage: {
    heading: { pre: string; highlight: string };
    subtitle: string;
    close: string;
    more: string;
  };
  projectLinks: {
    privateRepo: string;
    repo: string;
    frontend: string;
    backend: string;
    mobile: string;
  };
  projectsContent: Record<number, { title: string; description: string }>;
  contact: {
    heading: { highlight: string; post: string };
    subtitle: string;
    infoTitle: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    scheduleLabel: string;
    scheduleValue: string;
    followMe: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitIdle: string;
      submitLoading: string;
      successMessage: string;
      errorMessage: string;
      configError: string;
    };
    dateLocale: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    body: string;
    backLink: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Junior Developer',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      heading: { pre: 'About ', highlight: 'Me' },
      journeyTitle: 'My Journey',
      paragraphs: [
        "I graduated in Computer Systems Engineering from Universidad Politécnica de Tulancingo, with additional training as a Programming Technician and experience developing web applications, mainly focused on the backend.",
        "I specialize in building APIs and information management systems using technologies like Node.js, Express, and relational databases. I've worked on implementing business logic, access control, and solutions for real-world environments, with a strong focus on security and efficiency.",
        "I'm looking to join a team where I can keep growing as a backend developer, contribute robust and scalable solutions, and continue strengthening my skills in systems development.",
      ],
      academicTitle: 'Academic Background',
      academic: [
        { degree: 'Computer Systems Engineering', school: 'Universidad Politécnica de Tulancingo', status: 'Graduate' },
        { degree: 'Technical Degree in Programming', school: 'Centro de Bachillerato Tecnológico Industrial y de Servicio No. 179', status: 'Completed' },
      ],
      skillsHeading: { highlight: 'Technical', post: ' Skills' },
      skillCategories: ['Frontend', 'Mobile', 'Backend', 'Databases', 'Tools'],
      certificationsHeading: { pre: 'Certif', highlight: 'ications' },
      certificationNames: [
        'Python Essentials 1',
        'CCNA: Switching, Routing, and Wireless Essentials',
        'CCNA: Introduction to Networks',
        'Front-end Developer',
        'Database Administrator',
        'C# Programming',
        'Introduction to Programming',
        'Mobile App Development Course',
      ],
      viewCredential: 'View credential',
      modal: {
        titlePrefix: 'Credential: ',
        issuerLabel: 'Issuer:',
        yearLabel: 'Year:',
        idLabel: 'Credential ID:',
        close: 'Close',
        viewOfficial: 'View on official site',
      },
    },
    projectsPage: {
      heading: { pre: 'My ', highlight: 'Projects' },
      subtitle: "Here are some of my most recent projects. Each one represents different skills and technologies I've worked with.",
      close: 'Close',
      more: 'more',
    },
    projectLinks: {
      privateRepo: 'Private Repository',
      repo: 'Repository',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
    },
    projectsContent: {
      1: {
        title: 'AIFA Access Control System',
        description: 'Web system for controlling and logging access in airport security environments. Handles user management, role-based access control, access logging, and report generation. Built to ensure continuous availability and full traceability of information. The source code is not public for security reasons.',
      },
      2: {
        title: 'MAEKA',
        description: 'E-commerce web application for managing products, users, and orders on a centralized platform. Includes admin features for controlling all site information.',
      },
      3: {
        title: 'EDUSPHERE',
        description: 'Web system for academic and administrative management in educational institutions. Streamlines user administration and school information control on a centralized platform.',
      },
      4: {
        title: 'CONTAPP',
        description: 'Web and mobile application for managing educational content. Includes user authentication, quiz creation, and academic information management through a centralized structure.',
      },
    },
    contact: {
      heading: { highlight: 'Cont', post: 'act' },
      subtitle: "Have a project in mind? Let's talk! I'm always open to discussing new opportunities and collaborations.",
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Hidalgo, Mexico',
      scheduleLabel: 'Availability',
      scheduleValue: 'Monday - Friday',
      followMe: 'Follow me on',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Message subject',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submitIdle: 'Send Message',
        submitLoading: 'Sending...',
        successMessage: "Message sent successfully. I'll get back to you soon!",
        errorMessage: 'There was an error sending your message. Please try again or contact me directly at adierortix@gmail.com',
        configError: 'EmailJS configuration is incomplete. Please check the environment variables.',
      },
      dateLocale: 'en-US',
    },
    notFound: {
      title: '404',
      subtitle: 'Page Not Found',
      body: "The page you're looking for doesn't exist or has been moved.",
      backLink: 'Back to Home',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Junior',
      viewProjects: 'Ver Proyectos',
      contactMe: 'Contactarme',
    },
    about: {
      heading: { pre: 'Sobre ', highlight: 'mí' },
      journeyTitle: 'Mi trayectoria',
      paragraphs: [
        'Soy egresado de Ingeniería en Sistemas Computacionales por la Universidad Politécnica de Tulancingo, con formación como Técnico en Programación y experiencia en el desarrollo de aplicaciones web, principalmente en el área de backend.',
        'Me especializo en el desarrollo de APIs y sistemas para la gestión de información utilizando tecnologías como Node.js, Express y bases de datos relacionales. He trabajado en la implementación de lógica de negocio, control de accesos y soluciones orientadas a entornos reales, priorizando la seguridad y la eficiencia.',
        'Busco integrarme a un equipo donde pueda seguir creciendo como desarrollador backend, aportar soluciones robustas y escalables, y continuar fortaleciendo mis habilidades en el desarrollo de sistemas.',
      ],
      academicTitle: 'Formación Académica',
      academic: [
        { degree: 'Ingeniería en Sistemas Computacionales', school: 'Universidad Politécnica de Tulancingo', status: 'Egresado' },
        { degree: 'Técnico en Programación', school: 'Centro de Bachillerato Tecnológico Industrial y de Servicio No. 179', status: 'Completado' },
      ],
      skillsHeading: { highlight: 'Habilidades', post: ' Técnicas' },
      skillCategories: ['Frontend', 'Mobile', 'Backend', 'Bases de datos', 'Herramientas'],
      certificationsHeading: { pre: 'Certific', highlight: 'aciones' },
      certificationNames: [
        'Python Essentials 1',
        'CCNA: Switching, Routing, and Wireless Essentials',
        'CCNA: Introduction to Networks',
        'Desarrollador Front-end',
        'Administrador de bases de datos',
        'Programador en C#',
        'Introducción a la programación',
        'Curso de Desarrollo de Apps Móviles',
      ],
      viewCredential: 'Ver credencial',
      modal: {
        titlePrefix: 'Credencial de ',
        issuerLabel: 'Emisor:',
        yearLabel: 'Año:',
        idLabel: 'ID de credencial:',
        close: 'Cerrar',
        viewOfficial: 'Ver en sitio oficial',
      },
    },
    projectsPage: {
      heading: { pre: 'Mis ', highlight: 'Proyectos' },
      subtitle: 'Aquí puedes ver algunos de mis proyectos más recientes. Cada uno representa diferentes habilidades y tecnologías que domino.',
      close: 'Cerrar',
      more: 'más',
    },
    projectLinks: {
      privateRepo: 'Repositorio privado',
      repo: 'Repositorio',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Móvil',
    },
    projectsContent: {
      1: {
        title: 'Sistema de Control de Accesos – AIFA',
        description: 'Sistema web para el control y registro de accesos en entornos de seguridad aeroportuaria. Permite la gestión de usuarios, control de roles, registro de accesos y generación de reportes. Diseñado para garantizar la disponibilidad continua y trazabilidad de la información. El código fuente no es público por motivos de seguridad.',
      },
      2: {
        title: 'MAEKA',
        description: 'Aplicación web de comercio electrónico que permite la gestión de productos, usuarios y pedidos dentro de una plataforma centralizada. Incluye funcionalidades administrativas para el control de la información.',
      },
      3: {
        title: 'EDUSPHERE',
        description: 'Sistema web orientado a la gestión académica y administrativa en instituciones educativas. Facilita la administración de usuarios y el control de información escolar en una plataforma centralizada.',
      },
      4: {
        title: 'CONTAPP',
        description: 'Aplicación web y móvil orientada a la gestión de contenido educativo. Permite la autenticación de usuarios, creación de cuestionarios y administración de información académica mediante una estructura centralizada.',
      },
    },
    contact: {
      heading: { highlight: 'Cont', post: 'acto' },
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos! Estoy siempre abierto a discutir nuevas oportunidades y colaboraciones.',
      infoTitle: 'Información de contacto',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      locationValue: 'Hidalgo, México',
      scheduleLabel: 'Horario',
      scheduleValue: 'Lunes - Viernes',
      followMe: 'Sígueme en',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        emailLabel: 'Email',
        emailPlaceholder: 'tu.email@ejemplo.com',
        subjectLabel: 'Asunto',
        subjectPlaceholder: 'Asunto del mensaje',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submitIdle: 'Enviar Mensaje',
        submitLoading: 'Enviando...',
        successMessage: 'Mensaje enviado correctamente. ¡Te contactaré pronto!',
        errorMessage: 'Error al enviar el mensaje. Por favor, intenta nuevamente o contacta directamente a adierortix@gmail.com',
        configError: 'La configuración de EmailJS no está completa. Por favor, verifica las variables de entorno.',
      },
      dateLocale: 'es-MX',
    },
    notFound: {
      title: '404',
      subtitle: 'Página no encontrada',
      body: 'La página que buscas no existe o fue movida.',
      backLink: 'Volver al inicio',
    },
  },
};
