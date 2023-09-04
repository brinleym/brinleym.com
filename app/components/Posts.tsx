import Link from "next/link";
import { PostMeta } from "@/types/blog";
import Card from "./Card";
import Date from "./Date";

export default function Posts({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {posts.map(({title, date, slug}: PostMeta) => {
        return (
          <li>
            <Card key={title} condensed={true}>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <Link href={`/blog/${slug}`}><h3 className="text-lg hover:underline">{title}</h3></Link>
                <p className="text-sm"><Date dateString={date} /></p>
              </div>
            </Card>
          </li>
        )
      })}
    </ul>
  )
}