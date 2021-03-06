import Link from 'next/link'

import Heading from 'components/Heading'
import Head from 'components/Head'

import { Container } from 'styles/global'
import { PostBySlugProps } from 'types/api'

import * as S from './styles'

const PostTemplate = ({ post }: PostBySlugProps) => {
  return (
    <>
      <Head title={post?.seo?.title} description={post?.seo?.description} />
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
          </S.Header>
          <S.InfosWrapper>
            <Heading>{post.title}</Heading>
            <S.Infos>
              <p>{post.date}</p>·<p>{post.minuteRead} min leitura</p>
            </S.Infos>
          </S.InfosWrapper>
          <S.PostContentWrapper>
            <S.Content
              dangerouslySetInnerHTML={{ __html: `${post?.content?.html}` }}
            />

            <Link href="/">
              <a
                title="Voltar para página inicial"
                aria-label="Voltar para página inicial"
              >
                <S.NavigateToHome>← Voltar para o início</S.NavigateToHome>
              </a>
            </Link>
          </S.PostContentWrapper>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default PostTemplate
