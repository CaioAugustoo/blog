import * as S from './styles'
import Link from 'next/link'

export type BigPostProps = {
  title: string
  date: string
  excerpt: string
  slug: string
  imageUrl: string
}

const BigPost = ({ title, date, excerpt, imageUrl, slug }: BigPostProps) => (
  <S.Wrapper>
    <Link href={`/post/${slug}`}>
      <a aria-label={title}>
        <S.CoverImage src={imageUrl} alt={title} />
      </a>
    </Link>

    <S.PostContent>
      <div>
        <S.PostTitle>
          <Link href={`/post/${slug}`}>
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

export default BigPost
