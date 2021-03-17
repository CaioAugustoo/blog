import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a heading with a small size', () => {
    const { container } = renderWithTheme(<Heading size="small">blog.</Heading>)
    expect(screen.getByRole('heading', { name: /blog./i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a heading with a medium size', () => {
    const { container } = renderWithTheme(
      <Heading size="medium">blog.</Heading>
    )
    expect(screen.getByRole('heading', { name: /blog./i })).toHaveStyle({
      'font-size': '7.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a heading with a huge size', () => {
    const { container } = renderWithTheme(<Heading size="huge">blog.</Heading>)
    expect(screen.getByRole('heading', { name: /blog./i })).toHaveStyle({
      'font-size': '10.0rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
