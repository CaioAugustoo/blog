import Footer from 'components/Footer'
import Head from 'components/Head'

import client from 'graphql/client'
import { GET_ALL_POSTS } from 'graphql/queries'

import { GetStaticProps } from 'next'
import { AllPostProps } from 'Templates/Home'

import PostsTemplate from 'Templates/Posts'

const Posts = ({ posts }: AllPostProps) => {
  return (
    <>
      <Head title="Todos os posts" />
      <PostsTemplate posts={posts} />
      <Footer />
    </>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_ALL_POSTS, { first: 4 })

  return {
    props: {
      posts
    }
  }
}
