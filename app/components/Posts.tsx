import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Date from "./Date";
import { Fragment } from "react";
import Link from "next/link";

// Type Imports
import type { PostFrontmatter } from "@/types/blog";

export default function Posts({ posts }: { posts: PostFrontmatter[] }) {
  return (
    <ul className="flex flex-col divide-y divide-[var(--outline)]">
      {posts.map(({title, date, slug}: PostFrontmatter) => {
        return (
          <Fragment key={title}>
          <Link 
            className="group py-4 px-2 flex justify-between items-center hover:bg-[var(--hover-background)]"
            href={`/blog/${slug}`}
          >
            <div>
              <h3 className="text-2xl group-hover:underline">{title}</h3>
              <p className="block md:hidden text-sm"><Date dateString={date} /></p>
            </div>
            <div className="flex flex-row justify-end items-center gap-3">
              <p className="hidden md:block text-sm"><Date dateString={date} /></p>
              <div 
                className="rounded-full p-1 hover:bg-[var(--hover-background)] group-hover:translate-x-1 transition-all"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>
          </Link>
          </Fragment>
        )
      })}
    </ul>
  )
}