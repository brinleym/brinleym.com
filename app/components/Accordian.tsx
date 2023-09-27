"use client";
import { useState } from "react";
import SecondaryCard from "./card/SecondaryCard";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface AccordianProps {
  heading: string,
  additionalStyles?: string,
  children: React.ReactNode
}

export default function Accordian( { heading, additionalStyles="", children }: AccordianProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={additionalStyles}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full p-3 rounded-lg bg-[var(--surface-variant)] text-[var(--on-surface-variant)]"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-lg">{heading}</h3>
          <div 
            className="p-1 hover:bg-[var(--hover-surface-variant-background)] rounded-full flex items-center"
          >
            <ArrowDownIcon className={`w-5 h-5 rounded-full transition-all ${isOpen && "rotate-180"}`} />
          </div>
        </div>
      </button>
      {isOpen && 
        <SecondaryCard additionalStyles="translate-x-5 -translate-y-4">{children}</SecondaryCard>
      }
    </div>
  )
}