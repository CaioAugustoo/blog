import Heading from 'components/Heading'

import { Container } from 'styles/global'
import { PostsProps } from 'pages/post/[slug]'

import * as S from './styles'
import Link from 'next/link'
import DarkModeButton from 'components/DarkmodeButton'
import Head from 'components/Head'

const PostTemplate = ({ posts }: PostsProps) => {
  return (
    <>
      <Head title={posts.seo.title} description={posts.seo.description} />
      <S.Wrapper>
        <Container>
          <S.Header>
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
          </S.Header>
          <Heading size="huge">{posts.title}</Heading>
          <S.PostContentWrapper>
            <S.CoverImage src={posts.coverImage.url} alt={posts.title} />
            <S.Content
              dangerouslySetInnerHTML={{ __html: posts.content.html }}
            />
          </S.PostContentWrapper>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default PostTemplate
