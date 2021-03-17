import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_HERO_POST, GET_HOME_POSTS } from 'graphql/queries'

import Home, { HomeProps } from 'Templates/Home'
import Footer from 'components/Footer'

export default function Index({ posts, heroPosts }: HomeProps) {
  return (
    <>
      <Home posts={posts} heroPosts={heroPosts[0]} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_HOME_POSTS, { first: 4 })
  const { heroPosts } = await client.request(GET_HERO_POST)

  return {
    props: {
      posts,
      heroPosts
    }
  }
}
