import BigPost from 'components/BigPost'
import SmallPost from 'components/SmallPost'
import Heading from 'components/Heading'

import { Container } from 'styles/global'

import * as S from './styles'

export type PostsProps = {
  title: string
  id: string
  excerpt: string
  date: string
  coverImage: {
    url: string
  }
  slug: string
}

export type HomeProps = {
  heroPosts: PostsProps
  posts: PostsProps[]
}

const Home = ({ posts, heroPosts }: HomeProps) => {
  return (
    <main>
      <Container>
        <S.HeroSection>
          <Heading size="huge">Blog.</Heading>
          <BigPost
            title={heroPosts.title}
            excerpt={heroPosts.excerpt}
            date={heroPosts.date}
            imageUrl={heroPosts.coverImage.url}
            slug={heroPosts.slug}
          />
        </S.HeroSection>

        <S.MorePostSection>
          <Heading size="medium">Outros Posts</Heading>
          <div>
            {posts.map((post) => (
              <SmallPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageUrl={post.coverImage.url}
                slug={post.slug}
              />
            ))}
          </div>
        </S.MorePostSection>
      </Container>
    </main>
  )
}

export default Home
