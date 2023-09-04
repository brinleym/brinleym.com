import fs from "fs";
import { ProjectMeta, ProjectSlug } from "@/types/projects";

async function getProjectMeta(filename: string): Promise<ProjectMeta> {
  const { meta }: { meta: ProjectMeta } = await import(`../../projects/${filename}`);
  const projectSlug = filename.replace(/\.mdx$/, '');
  const projectMeta = { ...meta, slug: projectSlug }
  return projectMeta;
}

export async function getTopProjects(): Promise<ProjectMeta[]> {
  const projects: ProjectMeta[] = await getAllProjects();
  const topProjects: ProjectMeta[] = projects.filter((projectMeta: ProjectMeta): boolean => {
    // @ts-ignore
    return projectMeta.hasOwnProperty("isTopProject") ? projectMeta.isTopProject : false;
  });
  return topProjects;
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const files: string[] = fs.readdirSync(process.cwd() + "/projects/");
  const projects: ProjectMeta[] = [];
  
  for (const filename of files) {
    const projectMeta: ProjectMeta = await getProjectMeta(filename);
    projects.push(projectMeta);
  }

  return projects;
}

export function getProjectSlugs(): ProjectSlug[] {
  const filenames: string[] = fs.readdirSync(process.cwd() + "/projects/");
  const slugs: ProjectSlug[] = filenames.map((filename): ProjectSlug => { return { slug: filename.replace(/\.mdx$/, '') } });
  return slugs;
}