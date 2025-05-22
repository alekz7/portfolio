import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { socialLinks } from '../data/socialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formState);
    alert('Thanks for your message! This is a demo form, so no message was actually sent.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div 
        ref={ref} 
        className={`container mx-auto max-w-6xl transition-all duration-1000 ${
          inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out to me through the form below 
            or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Hello! I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-violet-500/40"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:contact@example.com" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+11234567890" className="text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="download-cv" className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Download My CV</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a comprehensive overview of my skills, experience, and education by downloading my CV.
              </p>
              <a 
                href="/your-cv.pdf" 
                download="YourName_CV.pdf"
                className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-violet-500/40"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;