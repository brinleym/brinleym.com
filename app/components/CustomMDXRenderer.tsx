"use client";
import Callout from "@/app/components/Callout";
import Chip from "@/app/components/Chip";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Quote from "@/app/components/Quote";
import SecondaryButton from "@/app/components/SecondaryButton";

// Type Imports
import type { PostFrontmatter } from "@/types/blog";
import type { ProjectFrontmatter } from "@/types/projects";

type Frontmatter = PostFrontmatter | ProjectFrontmatter;

const components = { 
  h1: (props: any) => 
    <h1 className="text-5xl my-4">{props.props.children}</h1>,
  h2: (props: any) => 
    <h2 className="text-3xl my-4">{props.children}</h2>,
  h3: (props: any) => 
    <h3 className="text-2xl my-4">{props.children}</h3>,
  p: (props: any) => 
    <p className="my-2 blog-body-font">{props.children}</p>,
  a: (props: any) => 
    <Link href={props.href} className="underline blog-body-font" target="_blank">{props.children}</Link>,
  ul: (props: any) => 
    <ul className="mx-6 my-1 list-disc blog-body-font">{props.children}</ul>,
  ol: (props: any) => 
    <ol className="mx-6 my-1 list-decimal blog-body-font" >{props.children}</ol>,
  li: (props: any) => 
    <li>{props.children}</li>,
  code: (props: any) => 
    <code className="text-base py-0.5 px-1 bg-[var(--surface-variant)] text-[var(--on-surface-variant)] border border-[var(--outline)] rounded">
      {props.children}
    </code>,
  SecondaryButton,
  Quote,
  Callout,
  Chip
}

export default function CustomMDXRenderer({ mdxSource }: { mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>}) {
  return (
    <MDXRemote components={components} {...mdxSource} />
  )
}