import styled, { css } from 'styled-components'

export const HeroSection = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0 ${theme.spacings.medium} 0;
  `}
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 10px;
    }
  }
`
