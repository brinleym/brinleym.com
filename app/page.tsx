import { getTopProjects } from "@/utils/projects";
import { getMostRecentPosts } from "@/utils/blog";
import PageHeading from "./components/PageHeading";
import Posts from "./components/Posts";
import Projects from "./components/Projects";
import SecondaryButton from "./components/SecondaryButton";
import Section from "./components/Section";
import SectionHeading from "./components/SectionHeading";

// Type Imports
import type { PostFrontmatter } from "@/types/blog";
import type { ProjectFrontmatter } from "@/types/projects";

export default async function Home() {
  const mostRecentPosts: PostFrontmatter[] = await getMostRecentPosts();
  const topProjects: ProjectFrontmatter[] = await getTopProjects();
  return (
    <>
      <PageHeading>Welcome</PageHeading>
      <Section>
        <div className="flex items-center justify-between">
          <SectionHeading>Recent Posts</SectionHeading>
          <SecondaryButton text="View all" link="/blog" />
        </div>
        <Posts posts={mostRecentPosts}/>
      </Section>
      <Section>
        <div className="flex items-center justify-between">
          <SectionHeading>Top Projects</SectionHeading>
          <SecondaryButton text="View all" link="/projects" />
        </div>
        <Projects projects={topProjects} />
      </Section>
    </>
  )
}
