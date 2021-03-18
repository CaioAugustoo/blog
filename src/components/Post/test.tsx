import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Post from '.'

const props = {
  title: 'From Server-side Rendering to Static Generation',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.',
  date: 'May 21, 2020',
  imageUrl:
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  slug: '/post/testando-projeto',
  minuteRead: 10
}

describe('<Post />', () => {
  it('should render the post title', () => {
    const { container } = renderWithTheme(<Post {...props} />)

    expect(
      screen.getByRole('heading', {
        name: props.title
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the excerpt', () => {
    const { container } = renderWithTheme(<Post {...props} />)

    expect(screen.getByText(props.excerpt)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the date', () => {
    const { container } = renderWithTheme(<Post {...props} />)

    expect(screen.getByText(props.date)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
