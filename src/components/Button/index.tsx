import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => <S.Wrapper>{children}</S.Wrapper>

export default Button
