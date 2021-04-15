import { GetStaticProps } from 'next'

import PostsTemplate from 'Templates/Posts'

import client from 'graphql/client'
import { GET_ALL_POSTS } from 'graphql/queries'

import { PostsProps } from 'types/api'

const Posts = ({ posts }: PostsProps) => {
  return <PostsTemplate posts={posts} />
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_ALL_POSTS, { first: 4 })

  return {
    props: {
      posts
    },
    revalidate: 600
  }
}
