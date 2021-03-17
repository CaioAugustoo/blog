import client from 'graphql/client'
import { GET_POST_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PostTemplate from 'Templates/Post'

export type PostsProps = {
  posts: {
    coverImage: {
      url: string
    }
    slug: string
    date: string
    title: string
    content: {
      html: string
    }
  }
}

export default function Post({ posts }: PostsProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PostTemplate posts={posts[0]} />
}

export async function getStaticPaths() {
  const { posts } = await client.request(GET_POST_BY_SLUG, {
    slug: ''
  })

  const paths = posts.map(({ slug = '' }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts } = await client.request(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!posts) return { notFound: true }

  return {
    props: {
      posts
    }
  }
}
