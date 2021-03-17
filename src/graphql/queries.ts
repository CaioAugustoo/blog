import { gql } from 'graphql-request'

export const GET_HOME_POSTS = gql`
  query getHomePosts($first: Int!) {
    posts(first: $first, orderBy: createdAt_DESC) {
      id
      title
      excerpt
      date
      slug
      coverImage {
        url
      }
    }
  }
`

export const GET_HERO_POST = gql`
  query getHeroPost {
    heroPosts {
      id
      title
      excerpt
      date
      slug
      coverImage {
        url
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      coverImage {
        url
      }
      slug
      date
      title
      content {
        html
      }
    }
  }
`
