import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, Star, Clock, Heart } from 'lucide-react';

interface ProblemProps {
  darkMode: boolean;
}

type Problem = {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  isFavorite: boolean;
  type: 'Practice' | 'PYQ';
};

const problems: Problem[] = [
  {
    id: '1',
    title: 'Calculate Simple Interest',
    difficulty: 'Easy',
    category: 'Percentages',
    isFavorite: false,
    type: 'Practice'
  },
  {
    id: '2',
    title: 'Time to Complete Work',
    difficulty: 'Medium',
    category: 'Time and Work',
    isFavorite: true,
    type: 'Practice'
  },
  {
    id: '3',
    title: 'Complex Probability Problem',
    difficulty: 'Hard',
    category: 'Probability',
    isFavorite: false,
    type: 'PYQ'
  }
];

function ProblemList({ darkMode, filter }: { darkMode: boolean; filter: string }) {
  const filteredProblems = problems.filter(problem => {
    if (filter === 'favorites') return problem.isFavorite;
    if (filter === 'pyqs') return problem.type === 'PYQ';
    return problem.type === 'Practice';
  });

  return (
    <div className="grid gap-6">
      {filteredProblems.map((problem) => (
        <div
          key={problem.id}
          className={`p-6 border rounded-lg ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-5 h-5" />
              <div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {problem.category} • {problem.type}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {problem.difficulty}
              </span>
              <button>
                <Star className={`w-5 h-5 ${problem.isFavorite ? 'fill-current text-yellow-400' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Problems({ darkMode }: ProblemProps) {
  const location = useLocation();
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
          Problems
        </h2>
        
        <div className="flex flex-col space-y-6">
          <nav className="flex space-x-6">
            <Link 
              to="/problems"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/problems' 
                  ? 'bg-black text-white' 
                  : darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Practice Problems</span>
            </Link>
            <Link 
              to="/problems/pyqs"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/problems/pyqs'
                  ? 'bg-black text-white'
                  : darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <Clock className="w-5 h-5" />
              <span>Previous Year Questions</span>
            </Link>
            <Link 
              to="/problems/favorites"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/problems/favorites'
                  ? 'bg-black text-white'
                  : darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Favorites</span>
            </Link>
          </nav>

          <div className="flex space-x-4">
            <button 
              onClick={() => setSelectedDifficulty('all')}
              className={`px-4 py-2 rounded-lg ${
                selectedDifficulty === 'all' 
                  ? 'bg-black text-white' 
                  : darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              All Problems
            </button>
            <button 
              onClick={() => setSelectedDifficulty('easy')}
              className={`px-4 py-2 rounded-lg ${
                selectedDifficulty === 'easy'
                  ? 'bg-black text-white'
                  : darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              Easy
            </button>
            <button 
              onClick={() => setSelectedDifficulty('medium')}
              className={`px-4 py-2 rounded-lg ${
                selectedDifficulty === 'medium'
                  ? 'bg-black text-white'
                  : darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              Medium
            </button>
            <button 
              onClick={() => setSelectedDifficulty('hard')}
              className={`px-4 py-2 rounded-lg ${
                selectedDifficulty === 'hard'
                  ? 'bg-black text-white'
                  : darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              Hard
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<ProblemList darkMode={darkMode} filter="practice" />} />
        <Route path="/pyqs" element={<ProblemList darkMode={darkMode} filter="pyqs" />} />
        <Route path="/favorites" element={<ProblemList darkMode={darkMode} filter="favorites" />} />
      </Routes>
    </div>
  );
}