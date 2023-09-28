export default function Quote({ children }: {children: React.ReactNode}) {
  return (
    <p className="m-4 quote">{children}</p>
  )
}