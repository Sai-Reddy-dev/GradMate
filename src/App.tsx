import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import CGPAEstimator from './components/CGPAEstimator';
import NotesHub from './components/NotesHub';
import CreatorsSection from './components/CreatorsSection';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';

type ActiveView = 'home' | 'cgpa' | 'notes' | 'creators';

function AppContent() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [activeView, setActiveView] = useState<ActiveView>('home');

  const handleFeatureClick = (feature: 'cgpa' | 'notes' | 'creators') => {
    setActiveView(feature);
  };

  const handleLogoClick = () => {
    setActiveView('home');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'cgpa':
        return (
          <section className="py-20 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300 mb-4"
                >
                  ← Back to Home
                </button>
              </div>
              <CGPAEstimator />
            </div>
          </section>
        );
      case 'notes':
        return (
          <section className="py-20 bg-gradient-to-br from-green-50/30 to-emerald-50/30 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300 mb-4"
                >
                  ← Back to Home
                </button>
              </div>
              <NotesHub />
            </div>
          </section>
        );
      case 'creators':
        return (
          <>
            <div className="pt-20 pb-8 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300 mb-4"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
            <CreatorsSection />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <FeatureCards onFeatureClick={handleFeatureClick} />
            <FeedbackSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/20 to-indigo-50/20 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div onClick={handleLogoClick}>
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </div>
      {renderContent()}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
