import styled, { css } from 'styled-components'

export const Post = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0 ${theme.spacings.xxlarge} 0;
    width: 100%;

    max-width: 800px;
  `}
`
export const PostContent = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const PostTitle = styled.h3`
  ${({ theme }) => css`
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: ${theme.spacings.xsmall};
    font-weight: ${theme.font.normal};

    @media (max-width: 765px) {
      font-size: ${theme.font.sizes.xlarge};
    }

    &:hover a {
      text-decoration: underline;
    }
  `}
`

export const PostExcerpt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 1.625;
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Date = styled.time`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-right: ${theme.spacings.xxsmall};
  `}
`

export const InfosWrapper = styled.div`
  ${({ theme }) => css`
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

    p {
      margin: 0 ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.large};
    }
  `}
`
