import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElement = (element: HTMLElement, delay: number) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };

    if (titleRef.current && subtitleRef.current && ctaRef.current) {
      animateElement(titleRef.current, 300);
      animateElement(subtitleRef.current, 600);
      animateElement(ctaRef.current, 900);
    }
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 ease-out text-gray-800 dark:text-white"
        >
          Full Stack Developer
          <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Creating Digital Experiences
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl mb-8 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300 text-gray-600 dark:text-gray-300"
        >
          I build beautiful, performant and accessible web applications with modern technologies.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-600"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-violet-500/40 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-violet-600 dark:border-violet-500 text-gray-800 dark:text-white rounded-lg hover:bg-violet-600 hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#projects" className="text-gray-500 dark:text-gray-400">
            <div className="w-8 h-12 border-2 border-gray-500 dark:border-gray-400 rounded-full mx-auto relative">
              <div className="w-1.5 h-3 bg-gray-500 dark:bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;