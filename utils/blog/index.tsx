import fs from "fs";
import { convertISOStringToDate } from "@/utils/date";
import { PostSlug, PostFrontmatter } from "@/types/blog";
import { serialize } from "next-mdx-remote/serialize";

async function getPostFrontmatter(filename: string): Promise<PostFrontmatter> {
  const raw: string = fs.readFileSync(process.cwd() + "/posts/" + `${filename}`, 'utf-8');
 
  // Serialize the MDX content
  let { frontmatter }: { frontmatter: PostFrontmatter } = 
  await serialize<Record<string, unknown>, PostFrontmatter>(raw, {
    parseFrontmatter: true,
  });

  const postSlug = filename.replace(/\.mdx$/, '');
  frontmatter = { ...frontmatter, slug: postSlug }
 
  // Return the serialized content
  return frontmatter;
}

export async function getMostRecentPosts(): Promise<PostFrontmatter[]> {
  const posts: PostFrontmatter[] = await getAllPosts();

  if (posts.length <= 3) {
    return posts;
  }

  const threeMostRecentPosts: PostFrontmatter[] = posts.slice(0, 3);
  return threeMostRecentPosts;
}

export async function getAllPosts(): Promise<PostFrontmatter[]> {
  const files: string[] = fs.readdirSync(process.cwd() + "/posts/");
  const posts: PostFrontmatter[] = [];
  
  for (const filename of files) {
    const postFrontmatter: PostFrontmatter = await getPostFrontmatter(filename);
    posts.push(postFrontmatter);
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