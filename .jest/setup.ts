/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom'
import 'jest-styled-components'

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    }
  }
