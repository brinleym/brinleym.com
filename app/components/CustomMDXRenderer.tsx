"use client";
import { Frontmatter } from "@/types/blog";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function CustomMDXRenderer({ mdxSource }: { mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>}) {
  return (
    <MDXRemote {...mdxSource} />
  )
}