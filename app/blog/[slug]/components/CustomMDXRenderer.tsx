"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function CustomMDXRenderer({ mdxSource }: { mdxSource: MDXRemoteSerializeResult}) {
  return (
    <MDXRemote {...mdxSource} />
  )
}