import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import ProjectDescription from './pages/ProjectDescription';
import { NotFound } from './pages/NotFound';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/projects/:slug" element={<PageTransition><ProjectDescription /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}