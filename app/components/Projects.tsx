import { ProjectMeta } from "@/types/projects";
import SurfaceVariantCard from "./card/SurfaceVariantCard";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Projects({ projects }: { projects: ProjectMeta[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {projects.map(({ title, description, demo, slug }: ProjectMeta) => {
        return (
          <li key={title} className="">
            <SurfaceVariantCard condensed={true} additionalStyles="group" link={`/projects/${slug}`}>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <h3 className="text-lg">{title}</h3>
                <div className="flex flex-row justify-end gap-3">
                  <p className="text-sm">{description}</p>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </SurfaceVariantCard>  
          </li>
        )
      })}
    </ul>
  )
}