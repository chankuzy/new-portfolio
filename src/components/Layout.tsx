import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar with dark mode toggle */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
      </header>

      {/* Main content with smooth padding transitions */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>

      {/* Professional footer */}
      <Footer />
    </div>
  );
}