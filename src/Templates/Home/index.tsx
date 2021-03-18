import Post from 'components/Post'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Link from 'next/link'
import DarkModeButton from 'components/DarkmodeButton'

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

export type AllPostProps = {
  posts: PostsProps[]
}

const HomeTemplate = ({ posts }: AllPostProps) => {
  return (
    <main>
      <Container>
        <S.Header>
          <Heading size="huge">Início</Heading>
          <DarkModeButton />
        </S.Header>

        <S.PostSection>
          {posts.map(({ id, title, excerpt, date, coverImage, slug }) => (
            <Post
              key={id}
              title={title}
              excerpt={excerpt}
              date={date}
              imageUrl={coverImage.url}
              slug={slug}
            />
          ))}
        </S.PostSection>
        {posts.length > 4 && (
          <Link href="/posts">
            <a>
              <Button>Todos os Posts</Button>
            </a>
          </Link>
        )}
      </Container>
    </main>
  )
}

export default HomeTemplate
