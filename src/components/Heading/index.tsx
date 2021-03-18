import { HeadingProps } from 'types/api'

import * as S from './styles'

const Heading = ({ children, size = 'medium' }: HeadingProps) => (
  <S.Heading size={size}>{children}</S.Heading>
)

export default Heading
