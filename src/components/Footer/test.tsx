import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByRole('heading', { name: /© 2021 - Caio Augusto/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
