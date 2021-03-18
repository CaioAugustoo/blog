import DarkModeButton from 'components/DarkmodeButton'

import Heading from 'components/Heading'
import Post from 'components/Post'

import Link from 'next/link'

import { Container } from 'styles/global'

import { AllPostProps } from 'Templates/Home'
import { Header } from 'Templates/Post/styles'

import * as S from './styles'

const PostsTemplate = ({ posts }: AllPostProps) => {
  return (
    <Container>
      <Header>
        <nav>
          <Link href="/">
            <a
              title="Voltar para página inicial"
              aria-label="Voltar para página inicial"
            >
              <Heading>Início</Heading>
            </a>
          </Link>
        </nav>
        <DarkModeButton />
      </Header>
      <Heading size="huge">Todos os posts</Heading>
      <S.Wrapper>
        {posts.map(({ id, title, coverImage, date, excerpt, slug }) => (
          <Post
            key={id}
            title={title}
            imageUrl={coverImage.url}
            date={date}
            excerpt={excerpt}
            slug={slug}
          />
        ))}
      </S.Wrapper>
    </Container>
  )
}

export default PostsTemplate
