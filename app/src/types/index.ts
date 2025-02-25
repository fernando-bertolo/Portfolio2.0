export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface Experience {
  id: number;
  company: string;
  city: string;
  position: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}