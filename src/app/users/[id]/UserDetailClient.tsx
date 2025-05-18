'use client'

import React, { useEffect } from 'react'
import { notFound } from 'next/navigation'
import { useUserStore } from '../../../store/userStore'
import { useUserTasks } from '../../../hooks/detailUserTasks'
import Table from '../../../components/Table/Table'
import { useDetailUsersId } from '../../../hooks/useAllUsers'

export default function UserDetailClient({ id }: { readonly id: number }) {
  const { data: user, isLoading: loadingUser } = useDetailUsersId(id)
  const { selectedUser, setSelectedUser } = useUserStore()
  const { data: tasks, isLoading: loadingTasks } = useUserTasks(id)

  useEffect(() => {
    if (user) setSelectedUser(user)
  }, [user])

  if (loadingUser || loadingTasks) return <p>Cargando...</p>
  if (!user) return notFound()

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Tarea' },
    {
      key: 'completed',
      label: 'Estado',
      render: (task: any) => (task.completed ? '✅ Completada' : '❌ Pendiente'),
    },
  ]

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <h3>Tareas</h3>
      <Table columns={columns} data={tasks} itemsPerPage={5} />
    </div>
  )
}
