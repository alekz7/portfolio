import React from 'react';
import { socialLinks } from '../data/socialLinks';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
          aria-label={link.name}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;