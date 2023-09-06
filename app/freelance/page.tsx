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
      <Section>
        <SectionHeading>Stages of work</SectionHeading>
        <div className="flex flex-col gap-3 justify-between">
          <div className="w-11/12 self-start">
            <Accordian heading="1. Initial call">
              <p>A beautiful, succinct and performant landing page</p>
            </Accordian>
          </div>
          <div className="w-11/12 self-center">
          <Accordian heading="2. Mockups">
            <p>A beautiful, succinct and performant landing page</p>
          </Accordian>
          </div>
          <div className="w-11/12 self-end">
          <Accordian heading="3. Build">
            <p>A beautiful, succinct and performant landing page</p>
          </Accordian>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading>Customer Reviews</SectionHeading>
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-8 justify-between">
          <p>
            It was a pleasure to hire Brinley to build the website for my blog. 
            With the few pieces of information that I provided her, she was 
            able to execute and take my vision from concept to functional 
            product in less than a week. The end result was a highly performant 
            website with a modern style. She also wrote accompanying 
            documentation so that I would be aware of how the site was hosted, 
            how to migrate the site if I wanted to host it elsewhere, and how 
            to quickly add new blog posts using markdown. I would definitely 
            hire her again for any other frontend work. She is diligent and 
            she strives to exceed expectations throughout the development 
            process. - Alex
          </p>
          <p>
            Brinley was professional, insightful, and wonderful to work with. 
            She was always responsive and worked quickly to implement my changes 
            on this project. She brought a breath of fresh air to the project 
            and provided more than was asked in both guidance and ideas. I 
            would highly recommend Brinley for any project, big or small. She 
            will approach your project with commitment and a true desire to 
            ensure you are absolutely happy with the outcome. - Mel
          </p>
          <p>
            Brinley was responsive, available, professional and open minded. 
            She is genuine and wants to provide you a beautiful product for you. 
            I would highly recommend her for your site. Not to mention she takes 
            great notes! - Diane
          </p>
        </div>
      </Section>
    </>
  )
}