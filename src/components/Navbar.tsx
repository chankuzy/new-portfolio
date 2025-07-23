import { useState } from 'react';
import { Code, Home, Briefcase, Contact, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current route matches nav item
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 z-50">
        <ImagePlaceholder className="w-10 h-10" />
        <span className="text-xl font-bold">Muhammad Ibrahim</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-6">
          <Link
            to="/"
            className={`flex items-center transition-colors ${
              isActive('/')
                ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                : 'hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            <Home className="mr-1" size={18} /> Home
          </Link>
          <Link
            to="/projects"
            className={`flex items-center transition-colors ${
              isActive('/projects')
                ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                : 'hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            <Briefcase className="mr-1" size={18} /> Projects
          </Link>
          <Link
            to="/skills"
            className={`flex items-center transition-colors ${
              isActive('/skills')
                ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                : 'hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            <Code className="mr-1" size={18} /> Skills
          </Link>
          <Link
            to="/contact"
            className={`flex items-center transition-colors ${
              isActive('/contact')
                ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                : 'hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            <Contact className="mr-1" size={18} /> Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-40 pt-6 pb-6 px-4">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                isActive('/')
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Home className="mr-3" size={18} /> Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                isActive('/projects')
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Briefcase className="mr-3" size={18} /> Projects
            </Link>
            <Link
              to="/skills"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                isActive('/skills')
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Code className="mr-3" size={18} /> Skills
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                isActive('/contact')
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Contact className="mr-3" size={18} /> Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}