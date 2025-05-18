import React from 'react';
import { Clock } from 'lucide-react';

interface PreviousProps {
  darkMode: boolean;
}

type PreviousProblem = {
  id: string;
  title: string;
  date: string;
  category: string;
  status: 'Solved' | 'Attempted';
};

const previousProblems: PreviousProblem[] = [
  {
    id: '1',
    title: 'Calculate Compound Interest',
    date: '2024-03-10',
    category: 'Percentages',
    status: 'Solved'
  },
  {
    id: '2',
    title: 'Probability of Drawing Cards',
    date: '2024-03-09',
    category: 'Probability',
    status: 'Attempted'
  }
];

export function Previous({ darkMode }: PreviousProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
        Previously Attempted Problems
      </h2>

      <div className="grid gap-6">
        {previousProblems.map((problem) => (
          <div
            key={problem.id}
            className={`p-6 border rounded-lg ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5" />
                <div>
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {problem.category} • {problem.date}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                problem.status === 'Solved' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {problem.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}