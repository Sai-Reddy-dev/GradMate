import saiImage from './sai.png';
import ramImage from './ram.png';
import shahanthImage from './shahanth.jpg';
import React from 'react';
import { Github, Linkedin, Users, Quote } from 'lucide-react';

const CreatorsSection: React.FC = () => {
  const creators = [
    {
      name: "Sai Reddy",
      role: "Full Stack Developer",
      image: saiImage,
      quote: "Turning ideas into fast, full-featured web apps.",
      github: "https://github.com/Sai-Reddy-dev",
      linkedin: "https://www.linkedin.com/in/durga-sai-gangireddy-velagala"
    },
    {
      name: "Shahanth Reddy",
      role: "UI/UX Designer",
      image: shahanthImage,
      quote: "Designing intuitive interfaces that put students first.",
      github: "http://github.com/shahanth4444",
      linkedin: "https://www.linkedin.com/in/shahanth?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6LuhChKQReagwvtVofzlhg%3D%3D"
    },
    {
      name: "Raghu Ram",
      role: "App Developer",
      image: ramImage,
      quote: "Building fast, functional, and user-friendly mobile apps.",
      github: "https://github.com/raghuramofficial07",
      linkedin: "https://www.linkedin.com/in/raghuram1241/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSO%2BMBkXDSreRJDWaSUhnuw%3D%3D"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              Meet the Team
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate individuals behind GradMate, dedicated to making student life easier and more organized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-200 dark:border-blue-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {creator.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {creator.role}
                </p>

                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
                    "{creator.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={creator.github}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 rounded-lg transition-all duration-300 hover:scale-110 group"
                    aria-label={`${creator.name}'s GitHub`}
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href={creator.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110 group"
                    aria-label={`${creator.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 inline-block">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Want to contribute to GradMate?
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300"
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