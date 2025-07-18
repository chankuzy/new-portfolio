import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {/* <DarkModeToggle /> */}
            <span className="ml-4 text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Ibrahim Muhammad | Khalifa. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/chankuzy/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-800 dark:text-blue-900 dark:hover:text-blue-800 transition-colors">
              <Github size={20} className='fill-blue-900' />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ibrahim-1881972a5/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} className='fill-blue-500' />
            </a>
            <a href="https://x.com/chankuzy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-400 transition-colors">
              <Twitter size={20} className='fill-blue-400' />
            </a>
            <a href="https://facebook.com/chankuzy/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600 dark:text-blue-700 dark:hover:text-blue-600 transition-colors">
              <Facebook
               size={20} className='fill-blue-700' />
            </a>
            <a href="https://www.instagram.com/chankuzy/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 dark:text-red-400 dark:hover:text-red-300 transition-colors">
              <Instagram
               size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}