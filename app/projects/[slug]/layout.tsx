import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ProjectArticleLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav aria-labelledby="backToProjects" className="group inline-block my-4">
        <Link href="/projects">
          <div className="inline-block text-lg flex justify-start items-center gap-2">
            <ArrowLeftIcon className="group-hover:-translate-x-px w-5 h-5" />
            <span id="backToProjects" className="group-hover:underline">Back to projects</span>
          </div>
        </Link>
      </nav>
      {children}
    </>
  )
}