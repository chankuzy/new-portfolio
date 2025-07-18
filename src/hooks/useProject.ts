import { projects } from "../data/projects"

export const useProject = (slug?: string) => {
    return projects.find((p) => p.slug === slug)
}