import Head from 'components/Head'
import Heading from 'components/Heading'
import Post from 'components/Post'

import { Header } from 'Templates/Post/styles'
import { Container } from 'styles/global'
import { PostsProps } from 'types/api'

import * as S from './styles'

import Link from 'next/link'

const PostsTemplate = ({ posts }: PostsProps) => {
  return (
    <>
      <Head title="Todos os posts" />
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
        </Header>
        <Heading size="huge">Todos os posts</Heading>
        <S.Wrapper>
          {posts.map(({ id, title, date, excerpt, slug, minuteRead }) => (
            <Post
              key={id}
              title={title}
              date={date}
              excerpt={excerpt}
              slug={slug}
              minuteRead={minuteRead}
            />
          ))}
        </S.Wrapper>
      </Container>
    </>
  )
}

export default PostsTemplate
