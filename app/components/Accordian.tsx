"use client";
import { useState } from "react";
import Card from "./Card";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface AccordianProps {
  heading: string,
  children: React.ReactNode
}

export default function Accordian( { heading, children }: AccordianProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-lg">{heading}</h3>
          <button 
            onClick={() => setIsOpen(!isOpen)}>
              <ArrowDownIcon className={`w-7 h-7 py-0.5 px-1 rounded-full transition-all hover:translate-y-1 ${isOpen && "rotate-180"}`} />
          </button>
        </div>
      </Card>
      {isOpen && 
        <Card additionalStyles="-translate-y-4 translate-x-5">{children}</Card>
      }
    </>
  )
}