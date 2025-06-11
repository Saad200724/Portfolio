export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'fullstack' | 'backend' | 'frontend' | 'data';
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  imageUrl: string;
};

export type Skill = {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
  percentage: number;
};

export type SkillCategory = {
  name: string;
  icon: string;
  skills: Skill[];
};

export type Experience = {
  role: string;
  duration: string;
  description: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
