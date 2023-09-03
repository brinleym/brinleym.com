import { getMostRecentPosts } from "@/utils/blog";
import { PostMeta } from "@/types/blog";
import Card from "./components/Card";
import Posts from "./components/Posts";
import SectionHeading from "./components/SectionHeading";
import SecondaryButton from "./components/SecondaryButton";
import Link from "next/link";

export default async function Home() {
  const mostRecentPosts: PostMeta[] = await getMostRecentPosts();
  return (
    <main>
      <section className="mb-12 w-full md:w-2/3 text-xl">
        <p>
          I'm Brinley Macnamara, a frontend engineer
          from Boston. I make websites that are modern, 
          accessible, and performant. Occaisionally, I make 
          podcasts about technology. I value:
        </p>
        <ol>
          <li>1. Clean code</li>
          <li>2. Stunning documentation</li>
          <li>3. And above all, meticulous engineering</li>
        </ol>

      </section>
      <section className="my-12">
        <div className="flex items-center justify-between">
          <SectionHeading>Recent Posts</SectionHeading>
          <Link href="/blog"><SecondaryButton>View all</SecondaryButton></Link>
        </div>
        <Posts posts={mostRecentPosts}/>
      </section>
    </main>
  )
}
