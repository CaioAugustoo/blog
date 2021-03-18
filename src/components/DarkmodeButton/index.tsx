import useDarkMode from 'use-dark-mode'
import * as S from './styles'

const DarkModeButton = () => {
  const darkMode = useDarkMode(true)

  return (
    <S.Wrapper>
      <S.Toggler
        aria-label="Alterar tema"
        title="Alterar tema"
        type="checkbox"
        onChange={darkMode.toggle}
        checked={darkMode.value}
      />
    </S.Wrapper>
  )
}

export default DarkModeButton
