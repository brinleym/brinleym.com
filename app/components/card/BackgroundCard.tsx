import { CardProps } from "./types";
import BaseCard from "./BaseCard";

export default function BackgroundCard({ children, link="", condensed=false, additionalStyles=""}: CardProps) {
  return (
    <BaseCard 
      children={children}
      link={link}
      condensed={condensed}
      backgroundColor="[var(--background)]"
      textColor="[var(--on-background)]"
      hoverBackgroundColor={`${link.length > 0 ? "[var(--secondary-container)]": ""}`}
      hoverTextColor={`${link.length > 0 ? "[var(--on-secondary-container)]": ""}`}
      additionalStyles={additionalStyles}  
    />
  )
}