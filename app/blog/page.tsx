import { getAllPosts } from "@/utils/blog";
import { PostMeta } from "@/types/blog";
import PageHeading from "@/app/components/PageHeading";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";
import Posts from "@/app/components/Posts";

export default async function Blog() {
  const posts: PostMeta[] = await getAllPosts();
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