export interface Project {
  id: number;
  image: string;
  technologies: string[];
  liveUrl?: string;
  links?: { key: string; url: string | null }[];
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