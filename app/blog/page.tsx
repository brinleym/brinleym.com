import { getAllPosts } from "@/utils/blog";
import { PostMeta } from "@/types/blog";
import Posts from "@/app/components/Posts";

export default async function Blog() {
  const posts: PostMeta[] = await getAllPosts();
  return (
    <>
      <Posts posts={posts} />
    </>
  )
}