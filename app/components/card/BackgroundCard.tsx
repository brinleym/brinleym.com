import { CardProps } from "./types";
import BaseCard from "./BaseCard";

export default function BackgroundCard({ children, link="", condensed=false, additionalStyles=""}: CardProps) {
  return (
    <BaseCard 
      link={link}
      condensed={condensed}
      backgroundColor="bg-[var(--background)]"
      textColor="text-[var(--on-background)]"
      hoverBackgroundColor={`${link.length > 0 ? "hover:bg-[var(--secondary-container)]": ""}`}
      hoverTextColor={`${link.length > 0 ? "hover:text-[var(--on-secondary-container)]": ""}`}
      additionalStyles={additionalStyles}  
    >{children}</BaseCard>
  )
}