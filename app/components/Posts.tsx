import Link from "next/link";
import { PostMeta } from "@/types/blog";
// import Card from "./Card";
import Date from "./Date";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SurfaceVariantCard from "./card/SurfaceVariantCard";

export default function Posts({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {posts.map(({title, date, slug}: PostMeta) => {
        return (
          <li key={title}>
            <SurfaceVariantCard condensed={true} additionalStyles="group" link={`/blog/${slug}`}>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <h3 className="text-lg">{title}</h3>
                <div className="flex flex-row justify-end gap-3">
                  <p className="text-sm"><Date dateString={date} /></p>
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