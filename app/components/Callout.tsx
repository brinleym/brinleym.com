export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 flex px-6 py-4 rounded border border-[var(--outline)] bg-[var(--secondary-container)] text-[var(--on-secondary-container)]">
      <div>{children}</div>
    </div>
  )
}