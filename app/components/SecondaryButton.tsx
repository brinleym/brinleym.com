interface SecondaryButtonProps {
  children: React.ReactNode,
  condensed?: boolean
}

export default function SecondaryButton({ children, condensed=false }: SecondaryButtonProps) {
  return (
    <button className={`hover:underline rounded-lg shadow-sm bg-[var(--secondary)] text-[var(--on-secondary)] ${condensed ? "text-sm py-0.5 px-2" : "py-1 px-3"}`}>{children}</button>
  )
}