export default function PageHeading({children}: {children: React.ReactNode}) {
  return (
    <h1 className="text-5xl my-4">
      {children}
    </h1>
  )
}