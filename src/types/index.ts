import type React from "react";

export type Project = {
  id: number;
  title: string;
  description: string;
  slug: string;
  images: string[];
  tags: string[];
  githubLink: string;
  link: string;
};

export type Skill = {
  title: string;
  icon: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}