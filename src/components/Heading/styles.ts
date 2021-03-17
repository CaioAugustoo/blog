import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const headingModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxxlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Heading = styled.h2<HeadingProps>`
  ${({ theme, size }) => css`
    ${!!size && headingModifiers[size](theme)};
    margin: ${theme.spacings.medium} 0;

    @media (max-width: 765px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`
