import { GetStaticProps } from 'next'

import HomeTemplate from 'Templates/Home'

import client from 'graphql/client'
import { GET_HOME_POSTS } from 'graphql/queries'

import { PostsProps } from 'types/api'

export default function Index({ posts }: PostsProps) {
  return <HomeTemplate posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_HOME_POSTS, { first: 5 })

  return {
    props: {
      posts
    },
    revalidate: 600
  }
}
