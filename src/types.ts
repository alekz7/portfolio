export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ size?: number }>;
}