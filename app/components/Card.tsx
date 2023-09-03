export default function Card({children}: {children: React.ReactNode}) {
  return (
    <div className="p-3 shadow-md rounded-md bg-[var(--surface-variant)] text-[var(--on-surface-variant)]">
      {children}
    </div>
  )
}