import Link from 'next/link'

import Post from 'components/Post'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Head from 'components/Head'

import { Container } from 'styles/global'
import { PostsProps } from 'types/api'

import * as S from './styles'

const HomeTemplate = ({ posts }: PostsProps) => {
  return (
    <main>
      <Head title="Início" />
      <Container>
        <S.Header>
          <Heading size="huge">Início</Heading>
        </S.Header>

        <section>
          {posts.map(({ id, title, excerpt, date, slug, minuteRead }) => (
            <Post
              key={id}
              title={title}
              excerpt={excerpt}
              date={date}
              slug={slug}
              minuteRead={minuteRead}
            />
          ))}
        </section>
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
