import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
            >
              DevPortfolio
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Creating innovative web solutions with modern technologies and clean code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks />
            <p className="mt-4 text-gray-400 text-sm">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            Designed and built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;