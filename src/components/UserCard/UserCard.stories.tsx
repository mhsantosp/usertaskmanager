import type { Meta, StoryObj } from '@storybook/react'
import UserCard from './UserCard'

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  title: 'Components/UserCard',
}
export default meta

type Story = StoryObj<typeof UserCard>

const user = {
  id: 1,
  name: 'Carlos Pérez',
  email: 'carlos@mail.com',
}

export const Default: Story = {
  args: {
    user,
  },
}
