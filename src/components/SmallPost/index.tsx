import * as S from './styles'
import Link from 'next/link'

export type SmallPostProps = {
  title: string
  date: string
  excerpt: string
  slug: string
  imageUrl: string
}

const SmallPost = ({
  title,
  date,
  excerpt,
  imageUrl,
  slug
}: SmallPostProps) => (
  <S.Wrapper>
    <Link href={slug}>
      <a aria-label={title}>
        <S.CoverImage src={imageUrl} alt={title} />
      </a>
    </Link>

    <S.PostContent>
      <div>
        <S.PostTitle>
          <Link href={slug}>
            <a aria-label={title} title={title}>
              {title}
            </a>
          </Link>
        </S.PostTitle>

        <S.Date>{date}</S.Date>
      </div>
      <S.PostExcerpt>{excerpt}</S.PostExcerpt>
    </S.PostContent>
  </S.Wrapper>
)

export default SmallPost
