export interface ProjectSlug {
  slug: string
}

export interface ProjectFrontmatter {
  title: string,
  description?: string,
  isTopProject?: boolean,
  demo?:string,
  slug?: string,
}