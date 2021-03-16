import { Story, Meta } from '@storybook/react/types-6-0'
import SmallPost from '.'

export default {
  title: 'SmallPost',
  component: SmallPost
} as Meta

export const Default: Story = () => <SmallPost />
