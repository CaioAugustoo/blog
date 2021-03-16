import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
    max-width: 570px;

    @media (max-width: 1250px) {
      max-width: 500px;
    }

    @media (max-width: 1069px) {
      max-width: 450px;
    }

    @media (max-width: 965px) {
      max-width: 400px;
    }

    @media (max-width: 865px) {
      max-width: 100%;
      margin: ${theme.spacings.small} 0;
    }
  `}
`

export const CoverImage = styled.img`
  max-width: 100%;
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
  `}
`
