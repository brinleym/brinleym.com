import fs from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostSlugs } from "@/utils/blog";
import { PostSlug, PostFrontmatter } from "@/types/blog";
import CustomMDXRenderer from "@/app/components/CustomMDXRenderer";
import Date from "@/app/components/Date";

/* Create routes based on post filenames */
export async function generateStaticParams(): Promise<PostSlug[]> {
  return getPostSlugs();
}


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
    <article>
      <h1 className="text-5xl my-2">{blogTitle}</h1>
      {date.length > 0 && <Date dateString={date} additionalStyles="inline-block text-lg mb-8" />}
      <CustomMDXRenderer mdxSource={mdxSource} />
    </article>
  )
}