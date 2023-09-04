import Link from "next/link";
import { ProjectMeta } from "@/types/projects";
import Card from "./Card";
import SecondaryButton from "./SecondaryButton";

export default function Projects({ projects }: { projects: ProjectMeta[] }) {
  return (
    <ul className="flex flex-col gap-3 md:flex-row justify-between md:justify-start md:items-stretch">
      {projects.map(({ title, description, demo, slug }: ProjectMeta) => {
        return (
          <li key={title} className="w-full md:w-1/3">
            <Card additionalStyles="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
              <div className="flex flex-row justify-end gap-2 pt-4">
                <Link href={`/projects/${slug}`}>
                  <SecondaryButton condensed={true}>Article</SecondaryButton>
                </Link>
                {demo &&
                  <Link href={demo}>
                    <SecondaryButton condensed={true}>Demo</SecondaryButton>
                  </Link>
                }
              </div>
            </Card>  
          </li>
        )
      })}
    </ul>
  )
}