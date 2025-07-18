import ImagePlaceholder from '../components/ImagePlaceholder';
import { ArrowRight, CloudLightning, Code, Hammer, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { skills } from '../data/skills';

export default function Home() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Hero Image */}
        <div className="md:w-1/3 flex justify-center">
          <ImagePlaceholder className="w-64 h-64 md:w-80 md:h-80" />
        </div>
        
        {/* Hero Text */}
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Muhammad Ibrahim</span>
          </h1>
          <h2 className="text-2xl text-slate-600 dark:text-slate-300 mb-6">
            Professional Web Developer specializing in Creating scalable and Accessible Web Applications
          </h2>
          <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
            With 5 years of experience creating digital solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to='/projects' className="btn-primary flex items-center">
              View Work <ArrowRight className="ml-2" />
            </Link>
            <Link to='/contact' className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg flex items-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      {/* Skills Preview */}
      <div className="container mx-auto px-4 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mr-4">
                  {skill.icon === 'code' ? <Code className="text-indigo-600 dark:text-indigo-400" /> : skill.icon === 'palette' ? <Palette className="text-indigo-600 dark:text-indigo-400" /> : ''}
                  {skill.icon === 'craftsman' ? <Hammer className="text-indigo-600 dark:text-indigo-400" /> : ''}
                  {skill.icon === 'blaze' ? <CloudLightning className="text-indigo-600 dark:text-indigo-400" /> : ''}
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}