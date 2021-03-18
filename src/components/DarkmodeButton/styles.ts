import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
`

export const Toggler = styled.input`
  position: relative;
  appearance: none;
  outline: none;
  width: 45px;
  height: 25px;
  background-color: #ffffff;
  border: 1px solid #4e92d1;
  border-radius: 50px;
  box-shadow: inset -20px 0 0 0 #4e92d1;
  transition-duration: 200ms;
  cursor: pointer;

  &:checked {
    border-color: #4e92d1;
    box-shadow: inset 20px 0 0 0 #4e92d1;

    &:after {
      left: 20px;
      box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.05);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 23px;
    height: 23px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  }
`
