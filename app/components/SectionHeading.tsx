export default function SectionHeading({children}: {children: React.ReactNode}) {
  return (
    <h2 className="text-3xl md:text-4xl my-4">
      {children}
    </h2>
  )
}