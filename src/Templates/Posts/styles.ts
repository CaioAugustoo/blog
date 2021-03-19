import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div:nth-child(2n) {
    margin-right: 0;
  }

  div:nth-child(3n) {
    margin-left: 0;
  }
`
