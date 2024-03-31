export default function Chip({ children }: { children : React.ReactNode }) {
  return (
    <div className="w-fit bg-[var(--secondary-container)] text-[var(--on-secondary-container)] inline-flex items-center justify-center text-sm rounded-xl py-0.5 px-3 border border-[var(--outline)]">{children}</div>
  )
}