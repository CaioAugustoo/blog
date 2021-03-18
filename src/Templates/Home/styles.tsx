import styled, { css } from 'styled-components'

export const HeroSection = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0 ${theme.spacings.medium} 0;
  `}
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 10px;
    }
  }
`

export const PostSection = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium} auto;

    > div:first-child {
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr;

      > .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: ${theme.spacings.large} 0;
        grid-gap: 30px;

        @media (max-width: 765px) {
          grid-template-columns: 1fr;
          grid-gap: 20px;
        }

        .infos h3 {
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
        }
      }
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  `}
`
