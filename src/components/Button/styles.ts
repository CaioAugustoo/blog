import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    border: 1px solid;
    display: block;
    margin: ${theme.spacings.large} auto;
    transition: all 0.3s ease;

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  `}
`
