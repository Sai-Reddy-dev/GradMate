import React from 'react';
import saiImage from './sai.png';
import ramImage from './ram.png';
import shahanthImage from './shahanth.jpg';
import { Github, Linkedin, Users, Quote, Star, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const CreatorsSection: React.FC = () => {
  const { user } = useAuth();

  const creators = [
    {
      name: "Sai Reddy",
      role: "Full Stack Developer",
      image: saiImage,
      quote: "Turning ideas into fast, full-featured web apps.",
      github: "https://github.com/Sai-Reddy-dev",
      linkedin: "https://www.linkedin.com/in/durga-sai-gangireddy-velagala",
      specialty: "React & Node.js & Databases"
    },
    {
      name: "Shahanth Reddy",
      role: "UI/UX Designer",
      image: shahanthImage,
      quote: "Designing intuitive interfaces that put students first.",
      github: "http://github.com/shahanth4444",
      linkedin: "https://www.linkedin.com/in/shahanth?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6LuhChKQReagwvtVofzlhg%3D%3D",
      specialty: "Design Systems"
    },
    {
      name: "Raghu Ram",
      role: "App Developer",
      image: ramImage,
      quote: "Building fast, functional, and user-friendly mobile apps.",
      github: "https://github.com/raghuramofficial07",
      linkedin: "https://www.linkedin.com/in/raghuram1241/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSO%2BMBkXDSreRJDWaSUhnuw%3D%3D",
      specialty: "UI/UX & FLUTTER"
    }
  ];

  if (!user) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-12 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Meet the Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Want to know the passionate individuals behind GradMate? Please log in to meet our amazing team!
              </p>
              <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium">
                <Heart className="w-5 h-5" />
                <span>Login required to view team profiles</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate individuals behind GradMate, dedicated to making student life easier and more organized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transform-gpu"
            >
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="relative overflow-hidden rounded-full mx-auto w-32 h-32 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={creator.image}
                      alt={creator.name}
                      className="w-full h-full object-cover border-4 border-blue-200 dark:border-blue-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-500 rounded-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {creator.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {creator.role}
                  </p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    <Star className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                      {creator.specialty}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-900/20 p-6 rounded-xl mb-6 group-hover:from-blue-50 group-hover:to-indigo-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-indigo-900/30 transition-all duration-500">
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
                    "{creator.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={creator.github}
                    className="group/link flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu"
                    aria-label={`${creator.name}'s GitHub`}
                  >
                    <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/link:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={creator.linkedin}
                    className="group/link flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu"
                    aria-label={`${creator.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover/link:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 inline-block hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
              <span className="text-lg font-semibold text-gray-800 dark:text-white">Want to contribute to GradMate?</span>
            </div>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300 hover:underline"
            >
              Get in touch with us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
