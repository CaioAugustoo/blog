import * as S from './styles'
import Link from 'next/link'

export type PostProps = {
  title: string
  date: string
  excerpt: string
  slug: string
  imageUrl: string
}

const Post = ({ title, date, excerpt, imageUrl, slug }: PostProps) => (
  <S.Post>
    <Link href={`/post/${slug}`}>
      <a aria-label={title}>
        <S.CoverImage src={imageUrl} alt={title} />
      </a>
    </Link>

    <S.PostContent className="content">
      <div className="infos">
        <S.PostTitle>
          <Link href={`/post/${slug}`}>
            <a aria-label={title} title={title}>
              {title}
            </a>
          </Link>
        </S.PostTitle>

        <S.Date>{date}</S.Date>
      </div>
      <S.PostExcerpt className="excerpt">{excerpt}</S.PostExcerpt>
    </S.PostContent>
  </S.Post>
)

export default Post
