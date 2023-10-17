import { CardProps } from "./types";
import BaseCard from "./BaseCard";

export default function SecondaryCard({ children, link="", condensed=false, additionalStyles=""}: CardProps) {
  return (
    <BaseCard 
      link={link}
      condensed={condensed}
      backgroundColor="bg-[var(--secondary-container)]"
      textColor="bg-[var(--on-secondary-container)]"
      hoverBackgroundColor={`${link.length > 0 ? "hover:bg-[var(--secondary-container)]": ""}`}
      hoverTextColor={`${link.length > 0 ? "hover:text-[var(--on-secondary-container)]": ""}`}
      additionalStyles={additionalStyles}  
    >
      {children}
    </BaseCard>
  )
}