import Footer from 'components/Footer'

import client from 'graphql/client'
import { GET_POST_BY_SLUG, GET_POSTS_BY_SLUG } from 'graphql/queries'

import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

import PostTemplate from 'Templates/Post'

export type PostProps = {
  post: {
    seo: {
      title: string
      description: string
    }
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

export default function Post({ post }: PostProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <PostTemplate post={post} />
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const { posts } = await client.request(GET_POSTS_BY_SLUG, {
    slug: ''
  })

  const paths = posts.map(({ slug = '' }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!post) return { notFound: true }

  return {
    props: {
      post
    },
    revalidate: 60
  }
}
