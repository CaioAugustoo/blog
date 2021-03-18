export type PostProps = {
  id?: string
  title: string
  excerpt: string
  date: string
  slug: string
  minuteRead: number
  seo?: HeadProps
  coverImage?: CoverImageProps
  content?: { html: string }
}

export type CoverImageProps = {
  url: string
}

export type PostBySlugProps = {
  post: PostProps
}

export type PostsProps = {
  posts: PostProps[]
}

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'huge'
}

export type HeadProps = {
  title?: string
  description?: string
}

export type ButtonProps = {
  children: React.ReactNode
}
