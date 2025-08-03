import React, { useState } from 'react';
import { Calculator, TrendingUp, Target, BookOpen } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const CGPAEstimator: React.FC = () => {
  const { user } = useAuth();
  const [currentCGPA, setCurrentCGPA] = useState('');
  const [remainingSemesters, setRemainingSemesters] = useState('');
  const [targetCGPA, setTargetCGPA] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const calculateCGPA = async () => {
    if (!user) return;

    const current = parseFloat(currentCGPA);
    const remaining = parseInt(remainingSemesters);
    const target = parseFloat(targetCGPA);

    if (current < 0 || current > 10 || target < 0 || target > 10 || remaining <= 0) {
      alert('Please enter valid values (CGPA: 0-10, Semesters: positive number)');
      return;
    }

    if (target <= current) {
      alert('Target CGPA should be higher than current CGPA');
      return;
    }

    setLoading(true);

    // Calculate required SGPA
    const requiredSGPA = ((target * (remaining + 1)) - current) / remaining;

    let calculationResult = '';
    let breakdown: string[] = [];

    if (requiredSGPA > 10) {
      calculationResult = 'Target CGPA is not achievable with the given parameters.';
    } else if (requiredSGPA > 9.5) {
      // Provide semester-wise breakdown
      calculationResult = `You need an average SGPA of ${requiredSGPA.toFixed(2)} in remaining semesters.`;
      
      // Create a realistic breakdown
      for (let i = 1; i <= remaining; i++) {
        const suggestedSGPA = Math.min(10, requiredSGPA + (Math.random() * 0.5 - 0.25));
        breakdown.push(`Semester ${i}: Aim for ${suggestedSGPA.toFixed(1)} SGPA`);
      }
    } else {
      calculationResult = `You need an average SGPA of ${requiredSGPA.toFixed(2)} in remaining semesters. This is achievable!`;
    }

    const resultData = {
      currentCGPA: current,
      targetCGPA: target,
      remainingSemesters: remaining,
      requiredSGPA,
      calculationResult,
      breakdown,
      achievable: requiredSGPA <= 10
    };

    setResult(resultData);

    // Save to database
    try {
      await supabase.from('cgpa_calculations').insert({
        user_id: user.id,
        current_cgpa: current,
        remaining_semesters: remaining,
        target_cgpa: target,
        required_sgpa: requiredSGPA,
        calculation_result: calculationResult
      });
    } catch (error) {
      console.error('Error saving calculation:', error);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-2xl shadow-lg border border-violet-200 dark:border-violet-700 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-violet-500 rounded-xl">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">CGPA Estimator</h2>
          <p className="text-gray-600 dark:text-gray-300">Calculate your required SGPA</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Current CGPA
          </label>
          <div className="relative">
            <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={currentCGPA}
              onChange={(e) => setCurrentCGPA(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              placeholder="e.g., 7.5"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Remaining Semesters
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              min="1"
              max="8"
              value={remainingSemesters}
              onChange={(e) => setRemainingSemesters(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              placeholder="e.g., 2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Target CGPA
          </label>
          <div className="relative">
            <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={targetCGPA}
              onChange={(e) => setTargetCGPA(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              placeholder="e.g., 8.5"
            />
          </div>
        </div>
      </div>

      <button
        onClick={calculateCGPA}
        disabled={loading || !currentCGPA || !remainingSemesters || !targetCGPA}
        className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg disabled:hover:scale-100 mb-6"
      >
        {loading ? 'Calculating...' : 'Calculate Required SGPA'}
      </button>

      {result && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Calculation Result
          </h3>
          
          <div className={`p-4 rounded-lg mb-4 ${
            result.achievable 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            <p className={`font-medium ${
              result.achievable 
                ? 'text-green-800 dark:text-green-400' 
                : 'text-red-800 dark:text-red-400'
            }`}>
              {result.calculationResult}
            </p>
          </div>

          {result.breakdown && result.breakdown.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">
                Semester-wise Breakdown:
              </h4>
              {result.breakdown.map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CGPAEstimator;