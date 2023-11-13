"use client";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

export interface ProcessListItem {
  headline: string, 
  supportingText: string
}

export default function Process({ items }: { items: ProcessListItem[] }) {
  return (
    <ul className="flex flex-col divide-y divide-[var(--outline)]">
      {items.map(({ headline, supportingText }: ProcessListItem): React.ReactNode => {
        return (
          <Fragment key={headline}>
            <ListItem headline={headline} supportingText={supportingText} />
          </Fragment>
        )
      })}
    </ul>
  )
}

function ListItem({ headline, supportingText }: ProcessListItem) {
  const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);
  return (
    <li className="py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">{headline}</h3>
        <button 
          onClick={() => {setIsOpenOnMobile(!isOpenOnMobile)}}
          className="flex items-center rounded-full p-1 mr-2 md:hidden hover:bg-[var(--hover-background)]">
            <ArrowDownIcon className={`w-5 h-5 transition-all ${isOpenOnMobile ? "rotate-180" : ""}`}/>
        </button>
      </div>
      {isOpenOnMobile && <p className="md:hidden">{supportingText}</p>}
      <p className="hidden md:block pt-2">{supportingText}</p>
    </li>
  )
}