import { BaseCardProps } from "./types";
import Link from "next/link";

export default function BaseCard(
  { children, condensed=false, 
    backgroundColor="", textColor="", 
    hoverBackgroundColor="", hoverTextColor="",
    additionalStyles="", link="" 
  } : BaseCardProps
) {
  return (
    <>
    {link.length === 0 ? 
      <CardSkeleton
        condensed={condensed}
        backgroundColor={backgroundColor}
        textColor={textColor}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverTextColor={hoverTextColor}
        additionalStyles={additionalStyles}
      >
        {children}
      </CardSkeleton>
    : <Link href={link}>
        <CardSkeleton
          condensed={condensed}
          backgroundColor={backgroundColor}
          textColor={textColor}
          hoverBackgroundColor={hoverBackgroundColor}
          hoverTextColor={hoverTextColor}
          additionalStyles={additionalStyles}
        >
          {children}
        </CardSkeleton>
      </Link>
    }
    </>
  )
}

function CardSkeleton(
  { children, condensed=false, 
    backgroundColor="", textColor="", 
    hoverBackgroundColor="", hoverTextColor="",
    additionalStyles="" 
  } : BaseCardProps
) {
  return (
    <div className={`
      rounded-md shadow-md transition-all
      ${condensed ? "p-3" : "p-4"}
      ${backgroundColor}
      ${textColor}
      ${hoverBackgroundColor}
      ${hoverTextColor}
      ${additionalStyles}
    `}>
      {children}
    </div>
  )
}
