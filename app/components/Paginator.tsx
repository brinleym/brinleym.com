"use client"
import { useState, Fragment } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Paginator({ items, startPage=0 }: { items: React.ReactNode[], startPage?: number }) {
  if (items.length === 0) {
    return <></>
  }
  if (items.length <= startPage)  {
    return <></>
  }

  const totalItems: number = items.length;
  const [currPage, setCurrPage] = useState(startPage);

  return (
    <>
      <div className="h-60 flex justify-between items-center gap-2 md:gap-6">
        {currPage === 0 ?
          <button 
            className="rounded-full p-1 opacity-40"
            disabled
          >
            <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        : <button 
            className="rounded-full p-1 hover:bg-[var(--hover-background)] transition-colors"
            onClick={() => {setCurrPage(currPage - 1)}}
          >
            <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        }
        <div className="rounded-lg max-h-full flex-grow overflow-y-auto">{items[currPage]}</div>
        {currPage === totalItems - 1 ?
          <button 
            className="rounded-full p-1 opacity-40"
            disabled
          >
            <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        : <button 
            className="rounded-full p-1 hover:bg-[var(--hover-background)] transition-colors"
            onClick={() => {setCurrPage(currPage + 1)}}
          >
            <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        }
      </div>
      <div className="mt-4 flex justify-center gap-6">
        {new Array(totalItems).fill(null).map((_, idx) => {
          return (
            <Fragment key={idx}>
              {currPage === idx ?
                <button 
                  onClick={() => {setCurrPage(idx)}}
                  key={idx} 
                  className={`bg-[var(--secondary)] w-5 h-2 border border-[var(--outline)]`}>
                </button>
                :
                <button 
                  onClick={() => {setCurrPage(idx)}}
                  key={idx} 
                  className={`w-5 h-2 border border-[var(--outline)] hover:bg-[var(--hover-background)]`}>
                </button>
              }
            </Fragment>
          )
        })}
      </div>
    </>
  )
}