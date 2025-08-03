import React, { useState } from 'react';
import { Send, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const FeedbackSection: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    feedback_text: '',
    rating: 0
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from('feedbacks')
        .insert({
          user_id: user.id,
          user_email: user.email || '',
          feedback_text: formData.feedback_text,
          rating: formData.rating || null
        });

      if (error) throw error;

      setSubmitted(true);
      setFormData({ feedback_text: '', rating: 0 });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white dark:bg-gray-800 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-700">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">
                Thank You!
              </h2>
              <p className="text-green-700 dark:text-green-300">
                Your feedback has been submitted successfully. We appreciate your input!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            💬 Got Feedback or Suggestions?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Help us make GradMate even better.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Rating (Optional)
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className="transition-all duration-300 hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= formData.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {formData.rating > 0 && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  You rated: {formData.rating} star{formData.rating !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="feedback_text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Feedback
              </label>
              <textarea
                id="feedback_text"
                name="feedback_text"
                value={formData.feedback_text}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Share your thoughts, suggestions, or feedback about GradMate..."
              />
            </div>

            <button
              type="submit"
              disabled={loading || !user}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg disabled:hover:scale-100"
            >
              <Send className="w-5 h-5" />
              <span>{loading ? 'Submitting...' : 'Send Feedback'}</span>
            </button>

            {!user && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Please log in to submit feedback.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;