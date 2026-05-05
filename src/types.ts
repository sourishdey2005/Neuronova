export type Category = 
  | 'Foundation AI' 
  | 'Data Science' 
  | 'Quant Finance' 
  | 'Infrastructure' 
  | 'Science & Society' 
  | 'Frontier Research';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  specifications?: string[];
  fullContent?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  insight: string;
  date: string;
  type: 'Publication' | 'Patent' | 'WIP';
  category: Category;
  link?: string;
  image?: string;
  specifications?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  avatar?: string;
  bio: string;
  focusAreas?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image?: string;
  content?: string;
  specifications?: string[];
}
