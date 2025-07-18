import type { SkillCategory } from "../types";

export const categories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: 'layout',
      skills: ["React", "Vue", "TypeScript", "Tailwind CSS", "Inertia.js"]
    },
    {
      title: "Backend",
      icon: 'server',
      skills: ["Laravel", "PHP", "REST APIs", "Web-Sockets"]
    },
    {
      title: "Mobile",
      icon: 'smartphone',
      skills: ["React Native", "PWA"]
    },
    {
      title: "DevOps",
      icon: 'cpu',
      skills: ["Docker", "AWS", "CI/CD", "NGINX", "Linux"]
    },
    {
      title: "Database",
      icon: 'database',
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
    }
  ];