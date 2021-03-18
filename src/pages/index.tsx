import Footer from 'components/Footer'
import Head from 'components/Head'

import client from 'graphql/client'
import { GET_HOME_POSTS } from 'graphql/queries'

import { GetStaticProps } from 'next'
import HomeTemplate, { AllPostProps } from 'Templates/Home'

export default function Index({ posts }: AllPostProps) {
  return (
    <>
      <Head title="Início" />
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
    }
  }
}
