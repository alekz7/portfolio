import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${
        inView ? 'opacity-100' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(2rem)'
      }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex space-x-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={16} className="mr-1" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;