interface SecondaryButtonProps {
  children: React.ReactNode,
  condensed?: boolean
}

export default function SecondaryButton({ children, condensed=false }: SecondaryButtonProps) {
  return (
    <button className={`hover:-translate-y-px overflow-hidden relative inline-flex group items-center justify-center rounded-lg shadow-sm bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] text-[var(--on-secondary)] ${condensed ? "text-sm py-0.5 px-2" : "py-1 px-3"}`}>
      <span className="rounded-full absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-32 group-hover:h-32 opacity-10"></span>
      <div className="relative">{children}</div>
    </button>
  )
}