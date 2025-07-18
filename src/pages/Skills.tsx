import { Code, Database, Cpu, Layout, Smartphone, Server } from 'lucide-react';
import { categories } from '../data/categories';

export default function Skills() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
        <Code className="mr-3" /> My Tech Stack
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="card p-6 hover:border-indigo-400 transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
                {category.icon === 'layout' ? <Layout className="text-indigo-500" size={24} /> : ''}
                {category.icon === 'server' ? <Server className="text-indigo-500" size={24} /> : ''}
                {category.icon === 'smartphone' ? <Smartphone className="text-indigo-500" size={24} /> : ''}
                {category.icon === 'cpu' ? <Cpu className="text-indigo-500" size={24} /> : ''}
                {category.icon === 'database' ? <Database className="text-indigo-500" size={24} /> : ''}
              </div>
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}