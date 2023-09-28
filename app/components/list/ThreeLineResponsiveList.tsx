"use client";
import { useState, Fragment } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export interface ListItem {
  headline: string, 
  supportingText: string
}

export default function ThreeLineResponsiveList({ items }: { items: ListItem[] }) {
  return (
    <ul className="flex flex-col divide-y divide-[var(--outline)]">
      {items.map(({ headline, supportingText }: ListItem): React.ReactNode => {
        const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);
        return (
          <Fragment key={headline}>
            <ListItem headline={headline} supportingText={supportingText} />
          </Fragment>
        )
      })}
    </ul>
  )
}

function ListItem({ headline, supportingText }: ListItem) {
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