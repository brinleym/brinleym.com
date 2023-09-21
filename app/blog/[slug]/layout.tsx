import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BlogPostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav aria-labelledby="backToBlog" className="group inline-block my-4">
        <Link href="/blog">
          <div className="inline-block text-lg flex justify-start items-center gap-2">
            <ArrowLeftIcon className="group-hover:-translate-x-px w-5 h-5" />
            <span id="backToBlog" className="group-hover:underline">Back to blog</span>
          </div>
        </Link>
      </nav>
      {children}
    </>
  )
}