import * as S from './styles'

const Footer = () => {
  const getCurrentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <h2>© {getCurrentYear} - Caio Augusto</h2>
    </S.Wrapper>
  )
}

export default Footer
