"use client";
import { useState } from "react";
import SurfaceVariantCard from "./card/SurfaceVariantCard";
import SecondaryCard from "./card/SecondaryCard";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface AccordianProps {
  heading: string,
  children: React.ReactNode
}

export default function Accordian( { heading, children }: AccordianProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SurfaceVariantCard>
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-lg">{heading}</h3>
          <button 
            onClick={() => setIsOpen(!isOpen)}>
              <ArrowDownIcon className={`w-7 h-7 py-0.5 px-1 rounded-full transition-all ${isOpen ? "hover:-translate-y-1" : "hover:translate-y-1"} ${isOpen && "rotate-180"}`} />
          </button>
        </div>
      </SurfaceVariantCard>
      {isOpen && 
        <SecondaryCard additionalStyles="translate-x-5 -translate-y-4">{children}</SecondaryCard>
      }
    </>
  )
}