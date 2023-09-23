"use client";
import { useState, useEffect } from "react";
import PageHeading from "@/app/components/PageHeading";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";
import Accordian from "@/app/components/Accordian";
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

export default function Freelance() {
  const email = "brinley.macnamara@gmail.com";
  const phone = "+1 (617) 780-1409";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (copiedEmail) {
      timeoutId = setTimeout(() => {
        setCopiedEmail(false);
      }, 2000)
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
      }, 2000)
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
        <div className="flex flex-col items-start md:flex-row gap-3 text-xl">
          <div className="items-stretch shadow overflow-hidden divide-x divide-[var(--outline)] rounded border border-[var(--outline)] inline-flex flex-row justify-between">
            <a className="hover:underline px-3 py-0.5 bg-[var(--surface-variant)]" href="tel:+1-617-780-1409">{phone}</a>
            <button 
              onClick={() => {navigator.clipboard.writeText(phone); setCopiedPhone(true)}}
              className="group px-3 py-0.5 hover:bg-[var(--secondary-container)]"
            >
              {copiedPhone ? 
                <ClipboardDocumentCheckIcon className="w-5 h-5 text-[var(--on-secondary-container)]" /> :
                <ClipboardDocumentIcon className="group-hover:text-[var(--on-secondary-container)] w-5 h-5"/>
              }
            </button>
          </div>
          <div className="items-stretch shadow overflow-hidden divide-x divide-[var(--outline)] rounded border border-[var(--outline)] inline-flex flex-row justify-between">
            <p className="px-3 py-0.5 bg-[var(--surface-variant)]">{email}</p>
            <button 
              onClick={() => {navigator.clipboard.writeText(email); setCopiedEmail(true)}}
              className="group hover:bg-[var(--secondary-container)] px-3 py-0.5"
            >
            {copiedEmail ? 
              <ClipboardDocumentCheckIcon className="w-5 h-5 text-[var(--on-secondary-container)]" /> :
              <ClipboardDocumentIcon className="group-hover:text-[var(--on-secondary-container)] w-5 h-5"/>
            }
            </button>
          </div>
        </div>
      </Section>
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
      </Section>
    </>
  )
}