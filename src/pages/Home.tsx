import React from 'react';
import { Brain, Calculator, Clock, Percent, Sigma, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

const categories: Category[] = [
  {
    name: 'Percentages',
    icon: <Percent className="w-6 h-6" />,
    description: 'Master percentage calculations and their applications'
  },
  {
    name: 'Time and Work',
    icon: <Clock className="w-6 h-6" />,
    description: 'Solve problems related to time, work, and efficiency'
  },
  {
    name: 'Profit and Loss',
    icon: <Wallet className="w-6 h-6" />,
    description: 'Calculate profit, loss, and related business problems'
  },
  {
    name: 'Probability',
    icon: <Calculator className="w-6 h-6" />,
    description: 'Learn probability concepts and solve related problems'
  },
  {
    name: 'Permutations',
    icon: <Sigma className="w-6 h-6" />,
    description: 'Practice permutation and combination problems'
  },
  {
    name: 'Reasoning',
    icon: <Brain className="w-6 h-6" />,
    description: 'Enhance your logical reasoning skills'
  }
];

interface HomeProps {
  darkMode: boolean;
}

export function Home({ darkMode }: HomeProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
          Welcome to Aptitude Solver
        </h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Your personal assistant for mastering aptitude and reasoning skills
        </p>
      </div>
      
      <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
        Select a Category
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/problems/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            className={`p-6 border rounded-lg transition-colors duration-200 text-left ${
              darkMode 
                ? 'border-gray-700 hover:border-gray-500' 
                : 'border-gray-200 hover:border-black'
            }`}
          >
            <div className="flex items-center mb-3">
              {category.icon}
              <h3 className="text-xl font-semibold ml-3">{category.name}</h3>
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}