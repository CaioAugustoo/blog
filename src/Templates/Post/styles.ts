import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  > div > h2 {
    letter-spacing: -0.04em;
    line-height: 1;
    font-size: 4.4rem;
    text-align: center;

    @media (max-width: 765px) {
      line-height: 1.2;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.large};
      line-height: 1.625;
      margin: ${theme.spacings.xsmall} auto;
    }

    a {
      color: #47c8ff;

      &:hover {
        text-decoration: underline;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: ${theme.spacings.small} 0;
    }

    blockquote {
      border-left: 4px solid #1d1d26;
      padding: 1rem 1.5rem;
      font-style: italic;
      font-size: 1.9rem;
      margin: ${theme.spacings.small} 0;
    }

    .code {
      white-space: pre;
      overflow-x: auto;
      padding: ${theme.spacings.xsmall};
      font-size: 1.2rem;
      border-width: 1px;
      border: 1px solid #15151c;
      background-color: #1d1d26;
      border-radius: 5px;

      ::-webkit-scrollbar {
        height: 6px;
        border-radius: 100px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background: #15151c;
      }

      p {
        margin: 0;
        font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
          monospace;
        font-size: 1.5rem;
      }
    }

    .intro {
      margin: ${theme.spacings.xsmall} 0;
      border-bottom: 1px solid #1d1d26;
    }

    ul li {
      font-size: ${theme.font.sizes.medium};
      margin: ${theme.spacings.xsmall} 0;
    }

    max-width: 66rem;
    margin: ${theme.spacings.xxlarge} auto;
  `}
`

export const PostContentWrapper = styled.article`
  ${({ theme }) => css`
    padding: 0 0 ${theme.spacings.xxlarge} 0;

    img {
      margin: 0px auto 60px;

      @media (max-width: 765px) {
        margin: 0px auto 0px;
      }
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
      h2 {
        font-size: ${theme.font.sizes.xlarge};
        @media (max-width: 765px) {
          font-size: 3rem;
        }
      }

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const InfosWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 750px;

    h2 {
      font-size: 4.4rem;
      text-align: center;

      @media (max-width: 765px) {
        font-size: ${theme.font.sizes.xlarge};
      }
    }
  `}
`

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    p {
      margin: 0 ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export const NavigateToHome = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0 ${theme.spacings.xsmall} 0;
    font-size: ${theme.font.sizes.large};

    &:hover {
      text-decoration: underline;
    }
  `}
`
