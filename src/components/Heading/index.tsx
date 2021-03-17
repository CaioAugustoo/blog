import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({ children, size = 'medium' }: HeadingProps) => (
  <S.Heading size={size}>{children}</S.Heading>
)

export default Heading
