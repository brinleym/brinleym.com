import { getAllPosts } from "@/utils/blog";
import PageHeading from "@/app/components/PageHeading";
import Posts from "@/app/components/Posts";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";

// Type Imports
import type { PostFrontmatter } from "@/types/blog";

export default async function Blog() {
  const posts: PostFrontmatter[] = await getAllPosts();
  return (
    <>
      <PageHeading>Blog</PageHeading>
      <Section>
        <SectionHeading>2023</SectionHeading>
        <Posts posts={posts} />
      </Section>
    </>
  )
}