import { Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">EventHub</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Events
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
