import fs from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getProjectSlugs } from "@/utils/projects";
import { ProjectSlug } from "@/types/projects";
import CustomMDXRenderer from "@/app/components/CustomMDXRenderer";

/* Create routes based on post filenames */
export async function generateStaticParams(): Promise<ProjectSlug[]> {
  return getProjectSlugs();
}

async function getProject(slug: string): Promise<MDXRemoteSerializeResult> {
  const raw: string = fs.readFileSync(process.cwd() + "/projects/" + `${slug}.mdx`, 'utf-8');
 
  // Serialize the MDX content
  const serialized: MDXRemoteSerializeResult = await serialize(raw, {
    parseFrontmatter: false,
  });
 
  // Return the serialized content
  return serialized;
}

export default async function ProjectArticle({ params }: { params: ProjectSlug }) {
  const mdxSource: MDXRemoteSerializeResult = await getProject(params.slug);
  return (
    <>
      <p>Post for {params.slug}</p>
      <CustomMDXRenderer mdxSource={mdxSource} />
    </>
  )
}