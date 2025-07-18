import { Briefcase, ChevronLeft, Github, LinkIcon, View } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconsUsed } from "../components/IconsUsed";
import { useProject } from "../hooks/useProject";

export default function ProjectDescription() {
const { slug } = useParams();
const project = useProject(slug);
const bothLinks = () => {
  if (project?.githubLink || project?.link) return true;
}
  return (
    <>
      <Link to={'/projects'} className="text-blue-500 hover:text-blue-400 flex space-x-2">
      <ChevronLeft /> <span>Back to projects</span>
      </Link>
      <section className="py-12 container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
          <Briefcase className="mr-3" /> {project?.title}
        </h1>

        <div className="flex flex-col gap-6">
          <div className="card p-6 max-w-[40rem]">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project?.description}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {project?.images && project?.images.map((image) => (
              <div className="border border-gray-800 rounded-xl">
                <img src={image} alt={`${project.title}'s image`} className="rounded-xl aspect-video h-full w-full" />
              </div>
            ))}
          </div>
          <div className="card p-6 max-w-[40rem]">
            <IconsUsed />
            <div className="flex flex-col gap-2 mb-4">
              {project?.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-400 font-semibold px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {bothLinks() && (
            <div className="card p-6 max-w-[40rem]">
              <div className="flex flex-wrap items-center mb-4">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mr-4">
                  <View className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">Experience it live</h3>
              </div>
              <div className="flex flex-col">
                {project?.githubLink && (
                  <div className="flex space-x-4">
                    <Github className="text-indigo-600" />
                    <a href={project?.githubLink} target="_blank" rel="noopener noreferer" className="text-gray-400 font-thin text-sm">click sends you to the project's github repo</a>
                  </div>
                )}
                {project?.link && (
                  <div className="mt-4 p-2">
                    Test the app live at 
                    <div className="flex items-center space-x-2">
                      <LinkIcon className="text-gray-400 font-medium text-sm" /> <a href={project?.link} target="_blank" rel="noopener noreferer" className="text-gray-400 font-thin text-sm">  {project?.link}</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </> 
  );
}