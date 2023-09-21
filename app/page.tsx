import { getMostRecentPosts } from "@/utils/blog";
import { getTopProjects } from "@/utils/projects";
import { PostFrontmatter } from "@/types/blog";
import { ProjectFrontmatter } from "@/types/projects";
import Posts from "./components/Posts";
import Projects from "./components/Projects";
import Section from "./components/Section";
import PageHeading from "./components/PageHeading";
import SectionHeading from "./components/SectionHeading";
import SecondaryButton from "./components/SecondaryButton";
import Link from "next/link";

export default async function Home() {
  const mostRecentPosts: PostFrontmatter[] = await getMostRecentPosts();
  const topProjects: ProjectFrontmatter[] = await getTopProjects();
  return (
    <>
      <PageHeading>Welcome</PageHeading>
      <Section>
        <div className="flex items-center justify-between">
          <SectionHeading>Recent Posts</SectionHeading>
          <Link href="/blog"><SecondaryButton>View all</SecondaryButton></Link>
        </div>
        <Posts posts={mostRecentPosts}/>
      </Section>
      <Section>
        <div className="flex items-center justify-between">
          <SectionHeading>Top Projects</SectionHeading>
          <Link href="/projects"><SecondaryButton>View all</SecondaryButton></Link>
        </div>
        <Projects projects={topProjects} />
      </Section>
    </>
  )
}
