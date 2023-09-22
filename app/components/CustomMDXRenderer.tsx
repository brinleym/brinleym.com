"use client";
import { PostFrontmatter } from "@/types/blog";
import { ProjectFrontmatter } from "@/types/projects";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type Frontmatter = PostFrontmatter | ProjectFrontmatter;

const components = { 
  h1: (props) => <h1 className="text-5xl my-4" {...props} />,
  h2: (props) => <h2 className="text-2xl my-1" {...props} />,
  p: (props) => <p {...props} />,
  a: (props) => <a className="underline" {...props}/>,
  ul: (props) => <ul className="px-6 py-1 list-disc" {...props}/>,
  ol: (props) => <ol className="px-4 py-2 list-decimal" {...props}/>,
  li: (props) => <li className="" {...props}/>
}

export default function CustomMDXRenderer({ mdxSource }: { mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>}) {
  return (
    <MDXRemote components={components} {...mdxSource} />
  )
}