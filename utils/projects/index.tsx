import fs from "fs";
import { ProjectSlug, ProjectFrontmatter } from "@/types/projects";
import { serialize } from "next-mdx-remote/serialize";

async function getProjectFrontmatter(filename: string): Promise<ProjectFrontmatter> {
  const raw: string = fs.readFileSync(process.cwd() + "/projects/" + `${filename}`, 'utf-8');
 
  // Serialize the MDX content
  let { frontmatter }: { frontmatter: ProjectFrontmatter } = 
  await serialize<Record<string, unknown>, ProjectFrontmatter>(raw, {
    parseFrontmatter: true,
  });

  const projectSlug = filename.replace(/\.mdx$/, '');
  frontmatter = { ...frontmatter, slug: projectSlug }
 
  return frontmatter;
}

export async function getTopProjects(): Promise<ProjectFrontmatter[]> {
  const projects: ProjectFrontmatter[] = await getAllProjects();
  const topProjects: ProjectFrontmatter[] = projects.filter(
    (projectFrontmatter: ProjectFrontmatter): boolean => {
    // @ts-ignore
    return projectFrontmatter.hasOwnProperty("isTopProject") ? projectFrontmatter.isTopProject : false;
  });
  return topProjects;
}

export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  const files: string[] = fs.readdirSync(process.cwd() + "/projects/");
  const projects: ProjectFrontmatter[] = [];
  
  for (const filename of files) {
    const projectFrontmatter: ProjectFrontmatter = await getProjectFrontmatter(filename);
    projects.push(projectFrontmatter);
  }

  return projects;
}

export function getProjectSlugs(): ProjectSlug[] {
  const filenames: string[] = fs.readdirSync(process.cwd() + "/projects/");
  const slugs: ProjectSlug[] = filenames.map((filename): ProjectSlug => { return { slug: filename.replace(/\.mdx$/, '') } });
  return slugs;
}