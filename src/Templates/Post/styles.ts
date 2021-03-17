import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  > div > h2 {
    letter-spacing: -0.04em;
    line-height: 1;

    @media (max-width: 765px) {
      text-align: center;
      line-height: 1.2;
    }
  }
`

export const CoverImage = styled.img`
  max-width: 100%;
`

export const Content = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.large};
      line-height: 1.625;
      margin: ${theme.spacings.xsmall} auto;
    }

    blockquote {
      border-left-width: 4px;
      border: 1px solid #a0aec0;
      background-color: #edf2f7;
      padding: 1rem 1.5rem;

      p {
        font-style: italic;
      }
    }

    .code {
      white-space: pre;
      overflow-x: auto;
      padding: ${theme.spacings.xsmall};
      font-size: 1.2rem;
      line-height: 1.2;
      border-width: 1px;
      border: 1px solid #cbd5e0;
      background-color: #f7fafc;

      p {
        margin: 0;
        line-height: 1;
        font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
          monospace;
        font-size: 1.5rem;
      }
    }

    max-width: 66rem;
    margin: ${theme.spacings.xxlarge} auto;
  `}
`

export const PostContentWrapper = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0 ${theme.spacings.xxlarge} 0;

    @media (max-width: 765px) {
      padding: ${theme.spacings.xsmall} 0;
    }
  `}
`
