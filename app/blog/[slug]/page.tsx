import CustomMDXRenderer from "@/app/components/CustomMDXRenderer";
import Date from "@/app/components/Date";
import fs from "fs";
import { getPostSlugs } from "@/utils/blog";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// Type Imports
import type { PostFrontmatter, PostSlug } from "@/types/blog";

// Create routes based on post filenames
export async function generateStaticParams(): Promise<PostSlug[]> {
  return await getPostSlugs();
}

// Get post from slug
async function getPost(slug: string): Promise<MDXRemoteSerializeResult<Record<string, unknown>, PostFrontmatter>> {
  const raw: string = fs.readFileSync(process.cwd() + "/posts/" + `${slug}.mdx`, 'utf-8');
 
  // Serialize the MDX content
  const serialized = await serialize<Record<string, unknown>, PostFrontmatter>(raw, {
    parseFrontmatter: true,
  });
 
  // Return the serialized content
  return serialized;
}

export default async function BlogPost({ params }: { params: PostSlug }) {
  const mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, PostFrontmatter> 
    = await getPost(params.slug);
  const blogTitle: string = mdxSource.frontmatter.title;
  const date: string = mdxSource.frontmatter?.date ? mdxSource.frontmatter.date : "";
  return (
    <article className="max-w-[80ch] text-lg">
      <h1 className="text-5xl my-2">{blogTitle}</h1>
      {date.length > 0 && <Date dateString={date} additionalStyles="inline-block text-lg mb-4" />}
      <CustomMDXRenderer mdxSource={mdxSource} />
    </article>
  )
}