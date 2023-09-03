import fs from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostSlugs } from "@/utils/blog";
import { PostSlug } from "@/types/blog";
import CustomMDXRenderer from "./components/CustomMDXRenderer";

/* Create routes based on post filenames */
export async function generateStaticParams(): Promise<PostSlug[]> {
  return getPostSlugs();
}

async function getPost(slug: string): Promise<MDXRemoteSerializeResult> {
  const raw: string = fs.readFileSync(process.cwd() + "/posts/" + `${slug}.mdx`, 'utf-8');
 
  // Serialize the MDX content
  const serialized: MDXRemoteSerializeResult = await serialize(raw, {
    parseFrontmatter: false,
  });
 
  // Return the serialized content
  return serialized;
}

export default async function BlogPost({ params }: { params: PostSlug }) {
  const mdxSource: MDXRemoteSerializeResult = await getPost(params.slug);
  return (
    <>
      <p>Post for {params.slug}</p>
      <CustomMDXRenderer mdxSource={mdxSource} />
    </>
  )
}