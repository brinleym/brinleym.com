import { CardProps } from "./types";
import BaseCard from "./BaseCard";

export default function PrimaryCard({ children, link="", condensed=false, additionalStyles=""}: CardProps) {
  return (
    <BaseCard 
      children={children}
      link={link}
      condensed={condensed}
      backgroundColor="bg-[var(--primary-container)]"
      textColor="text-[var(--on-primary-container)]"
      hoverBackgroundColor={`${link.length > 0 ? "hover:bg-[var(--secondary-container)]": ""}`}
      hoverTextColor={`${link.length > 0 ? "hover:text-[var(--on-secondary-container)]": ""}`}
      additionalStyles={additionalStyles}  
    />
  )
}