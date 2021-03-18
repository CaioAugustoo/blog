import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DarkModeButton from '.'

describe('<DarkModeButton />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<DarkModeButton />)

    const buttonWrapper = screen.getByLabelText('Alterar tema')
    expect(buttonWrapper).toBeInTheDocument()

    fireEvent.click(buttonWrapper)
    expect(document.body).toHaveClass('dark-mode')

    expect(container.firstChild).toMatchSnapshot()
  })
})
