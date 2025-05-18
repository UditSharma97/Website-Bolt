import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Moon, Search, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export function Header({ darkMode, setDarkMode, searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Brain className="h-8 w-8" />
            <h1 className="ml-3 text-2xl font-bold">Aptitude Solver</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/problems" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Problems</Link>
            <Link to="/contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-6">
            <div className={`relative ${darkMode ? 'text-white' : 'text-black'}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
              <input
                type="text"
                placeholder="Search problems..."
                className={`pl-10 pr-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-gray-500' 
                    : 'bg-white border-gray-200 focus:border-gray-400'
                } focus:outline-none`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <div className="flex space-x-4">
              <button className={`px-4 py-2 rounded-lg border ${
                darkMode 
                  ? 'border-gray-700 hover:bg-gray-800' 
                  : 'border-gray-200 hover:bg-gray-100'
              }`}>
                Log in
              </button>
              <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}