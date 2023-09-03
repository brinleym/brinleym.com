export default function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="hover:underline rounded-lg shadow-sm py-1 px-3 bg-[var(--secondary)] text-[var(--on-secondary)]">{children}</button>
  )
}