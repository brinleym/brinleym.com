"use client";
import { PostFrontmatter } from "@/types/blog";
import { ProjectFrontmatter } from "@/types/projects";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import SecondaryButton from "@/app/components/SecondaryButton";
import Quote from "@/app/components/Quote";
import Callout from "@/app/components/Callout";
import Chip from "@/app/components/Chip";

type Frontmatter = PostFrontmatter | ProjectFrontmatter;

const components = { 
  h1: (props: any) => 
    <h1 className="text-5xl my-4">{props.props.children}</h1>,
  h2: (props: any) => 
    <h2 className="text-3xl my-4">{props.children}</h2>,
  h3: (props: any) => 
    <h3 className="text-2xl my-4">{props.children}</h3>,
  p: (props: any) => 
    <p className="my-2">{props.children}</p>,
  a: (props: any) => 
    <Link href={props.href} className="underline" target="_blank">{props.children}</Link>,
  ul: (props: any) => 
    <ul className="mx-6 my-1 list-disc">{props.children}</ul>,
  ol: (props: any) => 
    <ol className="mx-6 my-1 list-decimal" >{props.children}</ol>,
  li: (props: any) => 
    <li className="">{props.children}</li>,
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