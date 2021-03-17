import styled, { css } from 'styled-components'

export const HeroSection = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0 ${theme.spacings.medium} 0;
  `}
`

export const MorePostSection = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium} auto;

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  `}
`
