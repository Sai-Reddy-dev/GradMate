import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-lg">Created with</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-lg">by Team GradMate</span>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/durga-sai-gangireddy-velagala"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Sai-Reddy-dev"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 GradMate. Made for students, by students.
            </p>
            <p className="text-gray-500 text-xs">
              Empowering academic success through technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;