import { useState, Fragment } from "react";
import Image from "next/image";
import Chip from "@/app/components/Chip";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export interface ServiceCardDetails {
  timeframe: string, 
  techStack?: string[]
}

export interface ServiceCardContent {
  image: string,
  headline: string,
  supportingText: string,
  details: ServiceCardDetails
}

export default function ServiceCard
(
  { image, headline, supportingText, details }: ServiceCardContent
) {
  const [ isOpen, setIsOpen ] = useState(false);

  const {timeframe, techStack=[]}: ServiceCardDetails = details;
  return (
    <div className="p-4 shadow rounded-lg border border-[var(--outline)]">
      <div className="flex flex-col justify-between">
        <h3 className="text-2xl">{headline}</h3>
        <div className="flex justify-between items-end gap-4">
          <p>{supportingText}</p>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center p-1 rounded-full hover:bg-[var(--hover-background)]">
              <ArrowDownIcon className={`w-5 h-5 ${isOpen && "rotate-180"} transition-all`} />
          </button>
        </div>
      </div>
      {isOpen &&
      <div className="pt-4">
        <div className="border-b border-[var(--outline)]"></div>
        <div className="pt-4 flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-lg">Timeframe</p>
            <Chip>{timeframe}</Chip>
          </div>
          {techStack.length > 0 &&
            <div className="flex flex-col">
              <p className="text-lg">Tech Stack</p>
              <div className="flex flex-wrap gap-1">
                {techStack.map((item) => {
                  return <Fragment key={item}><Chip>{item}</Chip></Fragment>
                })}
              </div>
            </div>
          }
        </div>
      </div>
      }
    </div>
  )
}