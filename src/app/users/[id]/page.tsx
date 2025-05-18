import { notFound } from 'next/navigation'
import UserDetailClient from './UserDetailClient'
import { use } from 'react'

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return users.map((user: { id: number }) => ({
    id: user.id.toString(),
  }))
}

export default function UserDetailPage({ params }: { readonly params: Promise<{ readonly id: string }> }) {
  const idData = use(params)
  const id = parseInt(idData.id)

  if (isNaN(id)) return notFound()

  return <UserDetailClient id={id} />
}
