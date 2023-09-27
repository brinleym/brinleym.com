"use client";
import { useState, useEffect, Fragment } from "react";
import PageHeading from "@/app/components/PageHeading";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";
import Accordian from "@/app/components/Accordian";
import Paginator from "@/app/components/Paginator";
import ServiceCard, { ServiceCardContent } from "@/app/components/card/ServiceCard";
import { ListItem as ThreeLineResponsiveListItem } from "@/app/components/list/ThreeLineResponsiveList";
import ThreeLineResponsiveList from "@/app/components/list/ThreeLineResponsiveList";
import Chip from "@/app/components/Chip";
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

const email: string = "brinley.macnamara@gmail.com";
const phone: string = "+1 617 780-1409";
const services: ServiceCardContent[] = [
  {
    image: "/landing-page.png",
    headline: "Landing Page",
    supportingText: "A beautiful, performant, and focused landing page",
    details: {
      timeframe: "1 week",
      techStack: [
        "React",
        "No code website builder"
      ]
    }
  },
  {
    image: "/landing-page.png",
    headline: "Business Website",
    supportingText: "An organized, intuitive, and performant business website",
    details: {
      timeframe: "2-3 weeks",
      techStack: [
        "React + Next.js",
        "No code website builder"
      ]
    }
  },
  {
    image: "/landing-page.png",
    headline: "Web Application",
    supportingText: "A bespoke web application that maxmizes usability,\
    security, and performance",
    details: {
      timeframe: "2-3 months",
      techStack: [
        "React + Next.js"
      ]
    }
  },
  {
    image: "/landing-page.png",
    headline: "Technical Writing",
    supportingText: "Highly original, informational technical writing",
    details: {
      timeframe: "1-2 days"
    }
  },
  {
    image: "/landing-page.png",
    headline: "Your Request",
    supportingText: "Have something else in mind? Feel free to reach out with \
    your request",
    details: {
      timeframe: "Depends",
    }
  }
]
const processSteps: ThreeLineResponsiveListItem[] = [
  {
    headline: "1. Initial Call",
    supportingText: "A 30 minute call to review your project requirements. After \
    the call, I'll provide you with a written overview of the cost, \
    timeline, and tech stack for your project"
  },
  {
    headline: "2. Mockups",
    supportingText: "Before building your site, I'll mockup each page of your \
    site and get your feedback on the mockups. You can provide your feedback \
    over email or in a video call - whatever's easier!"
  },
  {
    headline: "3. Build",
    supportingText: "I'll build your site using your preferred teck stack. \
    During this stage, I'll give you a private URL where you can view the \
    project as it's being built"
  },
  {
    headline: "4. Finalize",
    supportingText: "I'll document your site to ensure it's easy for you to \
    maintain. If you'd like, I'll also deploy your site to a public URL so \
    your customers can immediately start using it"
  },
];
const reviews: React.ReactNode[] = [
  <p>
    Brinley was professional, insightful, and wonderful to work with. 
    She was always responsive and worked quickly to implement my changes on 
    this project. She brought a breath of fresh air to the project and 
    provided more than was asked in both guidance and ideas. I would highly 
    recommend Brinley for any project, big or small. She will approach your 
    project with commitment and a true desire to ensure you are absolutely 
    happy with the outcome. - Mel
  </p>,
  <p>
    Brinley was responsive, available, professional and open minded. She is 
    genuine and wants to provide you a beautiful product for you. I would 
    highly recommend her for your site. Not to mention she takes great notes! 
    - Diane
  </p>,
  <p>
    It was a pleasure to hire Brinley to build the website for my blog. 
    With the few pieces of information that I provided her, she was able to 
    execute and take my vision from concept to functional product in less than 
    a week. The end result was a highly performant website with a modern style. 
    She also wrote accompanying documentation so that I would be aware of how 
    the site was hosted, how to migrate the site if I wanted to host it 
    elsewhere, and how to quickly add new blog posts using markdown. I would 
    definitely hire her again for any other frontend work. She is diligent and 
    she strives to exceed expectations throughout the development process. 
    - Alex
  </p>
];

export default function Freelance() {

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (copiedEmail) {
      timeoutId = setTimeout(() => {
        setCopiedEmail(false);
      }, 500)
    }
    return () => { 
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
    }
  }, [copiedEmail]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (copiedPhone) {
      timeoutId = setTimeout(() => {
        setCopiedPhone(false);
      }, 500)
    }
    return () => { 
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
    }
  }, [copiedPhone]);

  return (
    <>
      <PageHeading>Freelance</PageHeading>
      <Section>
        <SectionHeading>Get in touch</SectionHeading>
        <div className="flex flex-col items-start md:flex-row gap-3">
          <div className="items-stretch shadow overflow-hidden divide-x divide-[var(--outline)] rounded border border-[var(--outline)] inline-flex flex-row justify-between">
            <a className="flex items-center sm:text-lg hover:underline px-3 py-0.5" href="tel:+1-617-780-1409">{phone}</a>
            {copiedPhone ? 
              <button 
                onClick={() => {navigator.clipboard.writeText(phone); setCopiedPhone(true)}}
                className="px-3 py-0.5 bg-[var(--secondary-container)]"
              >
                <ClipboardDocumentCheckIcon className="w-5 h-5 text-[var(--on-secondary-container)]" />
              </button>
              :
              <button 
                onClick={() => {navigator.clipboard.writeText(phone); setCopiedPhone(true)}}
                className="px-3 py-0.5 hover:bg-[var(--hover-background)]"
              >
                <ClipboardDocumentIcon className="w-5 h-5"/>
              </button>
            }
          </div>
          <div className="items-stretch shadow overflow-hidden divide-x divide-[var(--outline)] rounded border border-[var(--outline)] inline-flex flex-row justify-between">
            <a 
              href={`mailto:${email}`}
              className="hover:underline flex items-center sm:text-lg px-3 py-0.5">{email}</a>
            {copiedEmail ? 
              <button 
                onClick={() => {navigator.clipboard.writeText(email); setCopiedEmail(true)}}
                className="px-3 py-0.5 bg-[var(--secondary-container)]"
              >
                <ClipboardDocumentCheckIcon className="w-5 h-5 text-[var(--on-secondary-container)]" />
              </button>
              :
              <button 
                onClick={() => {navigator.clipboard.writeText(email); setCopiedEmail(true)}}
                className="px-3 py-0.5 hover:bg-[var(--hover-background)]"
              >
                <ClipboardDocumentIcon className="w-5 h-5"/>
              </button>
            }
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading>How I can help</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
          {services.map(({image, headline, supportingText, details}: ServiceCardContent) => {
            return (
              <Fragment key={headline}>
                <ServiceCard 
                  image={image}
                  headline={headline}
                  supportingText={supportingText}
                  details={details}
                />
              </Fragment>
            )
          })}
        </div>
      </Section>
      <Section>
        <SectionHeading>Stages of work</SectionHeading>
        <ThreeLineResponsiveList items={processSteps} />
      </Section>
      <Section>
        <SectionHeading>Customer Reviews</SectionHeading>
        {/* <Paginator items={reviews} startPage={1} /> */}
      </Section>
    </>
  )
}