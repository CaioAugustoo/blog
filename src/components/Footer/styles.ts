import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: 60px 0;
    text-align: center;
    width: 100%;
    background: #fafafa;
    border-top: 1px solid #e2e8f0;

    h2 {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`
