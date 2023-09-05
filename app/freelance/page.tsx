import PageHeading from "@/app/components/PageHeading";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";
import Accordian from "@/app/components/Accordian";

export default function Freelance() {
  return (
    <>
      <PageHeading>Freelance</PageHeading>
      <Section>
        <SectionHeading>How I can help</SectionHeading>
        <div className="flex flex-col gap-3">
          <Accordian heading="Landing page">
            <p>A beautiful, succinct and performant landing page</p>
          </Accordian>
          <Accordian heading="Landing page">
            <p>A beautiful, succinct and performant landing page</p>
          </Accordian>
          <Accordian heading="Landing page">
            <p>A beautiful, succinct and performant landing page</p>
          </Accordian>
        </div>
      </Section>
    </>
  )
}