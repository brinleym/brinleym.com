import fs from "fs";
import { convertISOStringToDate } from "@/utils/date";
import { PostMeta, PostSlug } from "@/types/blog";

async function getPostMeta(filename: string): Promise<PostMeta> {
  const { meta }: { meta: PostMeta } = await import(`../../posts/${filename}`);
  const postSlug = filename.replace(/\.mdx$/, '');
  const postMeta = { ...meta, slug: postSlug }
  return postMeta;
}

export async function getMostRecentPosts(): Promise<PostMeta[]> {
  const posts: PostMeta[] = await getAllPosts();

  if (posts.length <= 3) {
    return posts;
  }

  const threeMostRecentPosts: PostMeta[] = posts.slice(0, 3);
  return threeMostRecentPosts;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files: string[] = fs.readdirSync(process.cwd() + "/posts/");
  const posts: PostMeta[] = [];
  
  for (const filename of files) {
    const postMeta: PostMeta = await getPostMeta(filename);
    posts.push(postMeta);
  }

  posts.sort((a, b) => {
    const aDate: Date = convertISOStringToDate(a.date);
    const bDate: Date = convertISOStringToDate(b.date);
    // @ts-ignore
    return bDate - aDate;
  });

  return posts;
}

export function getPostSlugs(): PostSlug[] {
  const filenames: string[] = fs.readdirSync(process.cwd() + "/posts/");
  const slugs: PostSlug[] = filenames.map((filename): PostSlug => { return { slug: filename.replace(/\.mdx$/, '') } });
  return slugs;
}