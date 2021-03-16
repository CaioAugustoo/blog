import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
  `}
`

export const CoverImage = styled.img`
  max-width: 100%;
`

export const PostContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: ${theme.spacings.large} 0;
    grid-gap: 30px;

    @media (max-width: 765px) {
      grid-template-columns: 1fr;
    }
  `}
`

export const PostTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
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
  `}
`

export const Date = styled.time`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
