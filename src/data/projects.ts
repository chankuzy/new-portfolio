import type { Project } from "../types";

export const projects: Project[] = [
    {
      id: 1,
      title: "Laravel + Inertia SaaS",
      slug: 'laravel',
      images: [],
      description: "Full-stack SaaS platform with subscription billing.",
      tags: ["Laravel", "Inertia", "Vue", "Tailwind"],
      githubLink: 'https://github.com/chankuzy/saas.git',
      link: 'https://chankuzysaas.onrender.com'
    },
    {
      id: 2,
      title: "React Dashboard",
      slug: 'dashboard',
      images: [],
      description: "Analytics dashboard with real-time data.",
      tags: ["React", "TypeScript", "Chart.js"],
      githubLink: '',
      link: ''
    },
    {
      id: 3,
      title: "Echonet",
      slug: 'echonet',
      images: [
        '/src/assets/projects/login.png',
        '/src/assets/projects/feed.png',
        '/src/assets/projects/profile.png',
        '/src/assets/projects/settings.png',
      ],
      description: "A Devs and normal users social networking platform, with integration of posts and media uploads system, follow functionality, developer centric and an implementation of a realtime chat system.",
      tags: ["Vue", "TypeScript", "WebSockets", "Laravel", "Tailwindcss"],
      githubLink: 'https://github.com/chankuzy/echonet.git',
      link: 'https://echonet.onrender.com'
    },
    {
      id: 4,
      title: "Whisper",
      slug: 'whisper',
      images: [],
      description: "An anonymous posting platform, originally for AFIT student, a platform where you can whisper your thought without your core identity, even the slightest. A place where u can dance like no one is watching you. And also includes a battle ground, where a battle between, individuals, ideas, concepts and contexts happens in the arena.",
      tags: ["React", "TypeScript", "WebSockets", "Laravel", "Tailwindcss"],
      githubLink: '',
      link: ''
    },
]