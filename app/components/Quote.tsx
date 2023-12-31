export default function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="quote text-[var(--secondary)] relative my-6">
      {children}
    </blockquote>
  )
}