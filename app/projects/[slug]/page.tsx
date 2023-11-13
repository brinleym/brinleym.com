import CustomMDXRenderer from "@/app/components/CustomMDXRenderer";
import fs from "fs";
import { getProjectSlugs } from "@/utils/projects";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { ProjectFrontmatter, ProjectSlug } from "@/types/projects";
import { serialize } from "next-mdx-remote/serialize";

// Create routes based on post filenames
export async function generateStaticParams(): Promise<ProjectSlug[]> {
  return getProjectSlugs();
}

async function getProject(slug: string): Promise<MDXRemoteSerializeResult<Record<string, unknown>, ProjectFrontmatter>> {
  const raw: string = fs.readFileSync(process.cwd() + "/projects/" + `${slug}.mdx`, 'utf-8');
 
  // Serialize the MDX content
  const serialized = await serialize<Record<string, unknown>, ProjectFrontmatter>(raw, {
    parseFrontmatter: true,
  });
 
  // Return the serialized content
  return serialized;
}

export default async function ProjectArticle({ params }: { params: ProjectSlug }) {
  const mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, ProjectFrontmatter> = 
    await getProject(params.slug);
  const projectTitle: string = mdxSource.frontmatter.title;
  return (
    <article>
      <h1 className="text-5xl my-2">{projectTitle}</h1>
      <CustomMDXRenderer mdxSource={mdxSource} />
    </article>
  )
}