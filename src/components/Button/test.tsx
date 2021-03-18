import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button>Botão</Button>)

    expect(screen.getByText(/Botão/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
