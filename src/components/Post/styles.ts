import styled, { css } from 'styled-components'

export const Post = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
    width: 100%;

    max-width: 600px;

    &:nth-child(3n) {
      margin-left: auto;
    }

    &:nth-child(2n) {
      margin-right: auto;
    }

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
  width: 100%;
  box-shadow: 0 5px 70px rgb(0 0 0 / 5%);
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
