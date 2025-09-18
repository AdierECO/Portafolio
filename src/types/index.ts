export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  links?: { type: string; url: string }[];
}

export interface NavigationItem {
  name: string;
  href: string;
  target?: '_self' | '_blank'; // Nueva propiedad
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}