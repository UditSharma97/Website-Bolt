import React from 'react';
import { Star } from 'lucide-react';

interface FavoritesProps {
  darkMode: boolean;
}

type FavoriteProblem = {
  id: string;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
};

const favoriteProblems: FavoriteProblem[] = [
  {
    id: '1',
    title: 'Time and Distance Problem',
    category: 'Time and Work',
    difficulty: 'Medium'
  },
  {
    id: '2',
    title: 'Profit Percentage Calculation',
    category: 'Profit and Loss',
    difficulty: 'Easy'
  }
];

export function Favorites({ darkMode }: FavoritesProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
        Favorite Problems
      </h2>

      <div className="grid gap-6">
        {favoriteProblems.map((problem) => (
          <div
            key={problem.id}
            className={`p-6 border rounded-lg ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {problem.category}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {problem.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}