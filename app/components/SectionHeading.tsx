import { ReactNode } from "react";

export default function SectionHeading({children}: {children: React.ReactNode}) {
  return (
    <h2 className="text-4xl my-8">
      {children}
    </h2>
  )
}