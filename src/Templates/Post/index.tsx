import Link from 'next/link'

import Heading from 'components/Heading'
import DarkModeButton from 'components/DarkmodeButton'
import Head from 'components/Head'

import { Container } from 'styles/global'
import { PostProps } from 'pages/post/[slug]'
import * as S from './styles'

const PostTemplate = ({ post }: PostProps) => {
  return (
    <>
      <Head title={post.seo.title} description={post.seo.description} />
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
          <Heading size="huge">{post.title}</Heading>
          <S.PostContentWrapper>
            <S.CoverImage src={post.coverImage.url} alt={post.title} />
            <S.Content
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          </S.PostContentWrapper>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default PostTemplate
