import { GetStaticProps } from 'next'

import Footer from 'components/Footer'
import HomeTemplate from 'Templates/Home'

import client from 'graphql/client'
import { GET_HOME_POSTS } from 'graphql/queries'

import { PostsProps } from 'types/api'

export default function Index({ posts }: PostsProps) {
  return (
    <>
      <HomeTemplate posts={posts} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_HOME_POSTS, { first: 4 })

  return {
    props: {
      posts
    },
    revalidate: 60
  }
}
