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

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      seo {
        title
        description
      }
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

export const GET_POSTS_BY_SLUG = gql`
  query getPostsBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      slug
    }
  }
`

export const GET_ALL_POSTS = gql`
  query getAllPosts($first: Int!) {
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
