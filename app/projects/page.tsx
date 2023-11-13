import { getAllProjects } from "@/utils/projects";
import PageHeading from "@/app/components/PageHeading";
import Projects from "@/app/components/Projects";
import Section from "@/app/components/Section";

// Type Imports
import type { ProjectFrontmatter } from "@/types/projects";

export default async function Page() {
  const projects: ProjectFrontmatter[] = await getAllProjects();
  return (
    <>
      <PageHeading>Projects</PageHeading>
      <Section>
        <Projects projects={projects} />
      </Section>
    </>
  )
}