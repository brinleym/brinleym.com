interface CardProps {
  children: React.ReactNode,
  condensed?: boolean,
  additionalStyles?: string,
}

export default function Card({ children, condensed=false, additionalStyles="" }: CardProps) {
  return (
    <div className={`${condensed ? "p-3" : "p-4"} shadow-md rounded-md bg-[var(--surface-variant)] text-[var(--on-surface-variant)] ${additionalStyles}`}>
      {children}
    </div>
  )
}