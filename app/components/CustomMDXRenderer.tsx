"use client";
import { PostFrontmatter } from "@/types/blog";
import { ProjectFrontmatter } from "@/types/projects";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Quote from "@/app/components/Quote";
import Callout from "@/app/components/Callout";

type Frontmatter = PostFrontmatter | ProjectFrontmatter;

const components = { 
  h1: (props) => <h1 className="text-5xl my-4" {...props} />,
  h2: (props) => <h2 className="text-3xl my-4" {...props} />,
  h3: (props) => <h3 className="text-2xl my-4" {...props} />,
  p: (props) => <p className="my-2" {...props} />,
  a: (props) => <a className="underline" target="_blank" {...props}/>,
  ul: (props) => <ul className="mx-6 my-1 list-disc" {...props}/>,
  ol: (props) => <ol className="mx-6 my-1 list-decimal" {...props}/>,
  li: (props) => <li className="" {...props}/>,
  code: (props) => <code className="text-base py-0.5 px-1 bg-[var(--surface-variant)] text-[var(--on-surface-variant)] border border-[var(--outline)] rounded" {...props} />,
  Quote,
  Callout
}

export default function CustomMDXRenderer({ mdxSource }: { mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>}) {
  return (
    <MDXRemote components={components} {...mdxSource} />
  )
}