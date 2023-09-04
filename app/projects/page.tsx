import PageHeading from "@/app/components/PageHeading";
import Section from "@/app/components/Section";
import Projects from "@/app/components/Projects";
import { getAllProjects } from "@/utils/projects";

export default async function Page() {
  const projects = await getAllProjects();
  return (
    <>
      <PageHeading>Projects</PageHeading>
      <Section>
        <Projects projects={projects} />
      </Section>
    </>
  )
}