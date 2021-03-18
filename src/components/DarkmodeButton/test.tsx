import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DarkModeButton from '.'

describe('<DarkModeButton />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<DarkModeButton />)

    expect(screen.getByLabelText('Alterar tema')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
