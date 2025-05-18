import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          Contact Us
        </h2>

        <div className={`mb-12 grid grid-cols-1 md:grid-cols-3 gap-6`}>
          <div className={`p-6 border rounded-lg text-center ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <Mail className="w-6 h-6 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              support@aptitudesolver.com
            </p>
          </div>

          <div className={`p-6 border rounded-lg text-center ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <Phone className="w-6 h-6 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              +1 (555) 123-4567
            </p>
          </div>

          <div className={`p-6 border rounded-lg text-center ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <MessageSquare className="w-6 h-6 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Available 24/7
            </p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-gray-500' 
                  : 'bg-white border-gray-200 focus:border-gray-400'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-gray-500' 
                  : 'bg-white border-gray-200 focus:border-gray-400'
              } focus:outline-none`}
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-gray-500' 
                  : 'bg-white border-gray-200 focus:border-gray-400'
              } focus:outline-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}