import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /© 2021 - Caio Augusto/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
