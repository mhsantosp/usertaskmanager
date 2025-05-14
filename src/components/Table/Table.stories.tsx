import type { Meta, StoryObj } from '@storybook/react'
import Table from './Table'

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Components/Table',
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Table>

const sampleData = [
  { id: 1, name: 'Juan', email: 'juan@mail.com' },
  { id: 2, name: 'Ana', email: 'ana@mail.com' },
]

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'email', label: 'Correo' },
]

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
    itemsPerPage: 2,
  },
}
