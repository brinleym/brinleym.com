import Link from "next/link";

interface CardProps {
  children: React.ReactNode,
  condensed?: boolean,
  additionalStyles?: string,
  link?: string
}

interface CardContentProps {
  children: React.ReactNode,
  condensed: boolean,
  additionalStyles: string
}

export default function Card({ children, condensed=false, additionalStyles="", link="" }: CardProps) {
  return (
    <>
      {link.length > 0 
        ? <Link href={link}>
            <CardContent condensed={condensed} additionalStyles={additionalStyles}>{children}</CardContent>
          </Link> 
        : <CardContent condensed={condensed} additionalStyles={additionalStyles}>{children}</CardContent>}
    </>
  )
}

function CardContent({ children, condensed, additionalStyles }: CardContentProps) {
  return (
    <div className={`${condensed ? "p-3" : "p-4"} shadow-md rounded-md hover:shadow-lg bg-[var(--surface-variant)] text-[var(--on-surface-variant)] hover:bg-[var(--secondary-container)] hover:text-[var(--on-secondary-container)] transition-all duration-300 ${additionalStyles}`}>
      {children}
    </div>
  )
}