import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Hero: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              GradMate
            </span>
          </h2>
          <h3 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
            Your Academic Companion
          </h3>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300 leading-relaxed">
            Estimate your CGPA, share notes, get feedback, and manage your student life all in one beautiful, modern platform designed specifically for students.
          </p>
        </div>

        {user && (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">Welcome back!</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Logged in as <span className="font-medium text-blue-600 dark:text-blue-400">{user.email?.split('@')[0]}</span>
            </p>
          </div>
        )}

        {!user && (
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-md mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ready to get started? Sign up to access all features!
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>CGPA Calculator</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Notes Sharing</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Feedback System</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;