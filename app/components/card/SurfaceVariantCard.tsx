import { CardProps } from "./types";
import BaseCard from "./BaseCard";

export default function SurfaceVariantCard({ children, link="", condensed=false, additionalStyles=""}: CardProps) {
  return (
    <BaseCard 
      children={children}
      link={link}
      condensed={condensed}
      backgroundColor="[var(--surface-variant)]"
      textColor="[var(--on-surface-variant)]"
      hoverBackgroundColor={`${link.length > 0 ? "[var(--secondary-container)]": ""}`}
      hoverTextColor={`${link.length > 0 ? "[var(--on-secondary-container)]": ""}`}
      additionalStyles={additionalStyles}  
    />
  )
}