import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Link from "next/link";

// Type Imports
import type { ProjectFrontmatter } from "@/types/projects";

export default function Projects({ projects }: { projects: ProjectFrontmatter[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {projects.map(({ title, description, demo, slug }: ProjectFrontmatter) => {
        return (
          <Fragment key={title}>
            <Link
              href={`/projects/${slug}`}
              className="group flex flex-col p-4 shadow rounded-xl border border-[var(--outline)] hover:bg-[var(--hover-background)]"
            >
              <h3 className="group-hover:underline text-2xl">{title}</h3>
              <div className="flex flex-row justify-between items-center">
                <p>{description}</p>
                <ArrowRightIcon className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </Link>
          </Fragment>
        )
      })}
    </ul>
  )
}