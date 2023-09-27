export default function Section({ children, additionalStyles="" }: { children: React.ReactNode, additionalStyles?: string }) {
  return (
    <section className={`my-12 ${additionalStyles}`}>
      {children}
    </section>
  )
}