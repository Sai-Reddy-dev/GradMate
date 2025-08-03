import React from 'react';
import { Calculator, BookOpen, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface FeatureCardsProps {
  onFeatureClick: (feature: 'cgpa' | 'notes' | 'creators') => void;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ onFeatureClick }) => {
  const { user } = useAuth();

  const handleFeatureClick = (feature: 'cgpa' | 'notes' | 'creators') => {
    if ((feature === 'cgpa' || feature === 'notes') && !user) {
      alert('Please log in to access this feature.');
      return;
    }
    onFeatureClick(feature);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CGPA Estimator Card */}
          <div className="group bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-violet-200 dark:border-violet-700">
            <div className="flex items-center justify-center w-16 h-16 bg-violet-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              🎓 CGPA Estimator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Calculate and track your cumulative grade point average with our intelligent estimation tool.
            </p>
            <button
              onClick={() => handleFeatureClick('cgpa')}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              {user ? 'Open Tool' : 'Login to Access'}
            </button>
          </div>

          {/* Notes Hub Card */}
          <div className="group bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-200 dark:border-green-700">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              📚 Notes Hub
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Access and share study materials, lecture notes, and academic resources with fellow students.
            </p>
            <button
              onClick={() => handleFeatureClick('notes')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              {user ? 'Browse Notes' : 'Login to Access'}
            </button>
          </div>

          {/* Creators Info Card */}
          <div className="group bg-gradient-to-br from-sky-100 to-cyan-100 dark:from-sky-900/30 dark:to-cyan-900/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-sky-200 dark:border-sky-700">
            <div className="flex items-center justify-center w-16 h-16 bg-sky-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              👤 Meet the Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Get to know the passionate developers and designers who created GradMate for students like you.
            </p>
            <button
              onClick={() => handleFeatureClick('creators')}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;