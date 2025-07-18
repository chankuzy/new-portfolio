import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
        <Briefcase className="mr-3" /> My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="card p-6">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description.length > 170 ? project.description.slice(0, 160) + '...' : project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                  {tag}
                </span>
              ))}
            </div>
            <Link to={`/projects/${project.slug}`} className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
              View Details <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}