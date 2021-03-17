import Heading from 'components/Heading'

import { Container } from 'styles/global'
import { PostsProps } from 'pages/post/[slug]'

import * as S from './styles'
import Link from 'next/link'

const PostTemplate = ({ posts }: PostsProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.BackToHome>
          <Link href="/">
            <a
              title="Voltar para página inicial"
              aria-label="Voltar para página inicial"
            >
              <Heading>Início</Heading>
            </a>
          </Link>
        </S.BackToHome>

        <Heading size="huge">{posts.title}</Heading>

        <S.PostContentWrapper>
          <S.CoverImage src={posts.coverImage.url} alt={posts.title} />
          <S.Content dangerouslySetInnerHTML={{ __html: posts.content.html }} />
        </S.PostContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default PostTemplate
