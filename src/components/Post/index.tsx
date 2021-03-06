import Link from 'next/link'

import * as S from './styles'

import { PostProps } from 'types/api'

const Post = ({ title, date, excerpt, slug, minuteRead }: PostProps) => (
  <S.Post>
    <S.PostContent>
      <div className="infos">
        <S.PostTitle>
          <Link href={`/post/${slug}`}>
            <a aria-label={title} title={title}>
              {title}
            </a>
          </Link>
        </S.PostTitle>

        <S.InfosWrapper>
          <S.Infos>
            <S.Date>{date}</S.Date>·<p>{minuteRead} min leitura</p>
          </S.Infos>
        </S.InfosWrapper>
      </div>
      <S.PostExcerpt>{excerpt}</S.PostExcerpt>
    </S.PostContent>
  </S.Post>
)

export default Post
