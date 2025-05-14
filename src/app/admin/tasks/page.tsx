'use client'

import { useAllTasks } from '../../../hooks/useAllTasks';
import Table from '../../../components/Table/Table';

export default function AdminTasksPage() {
  const { data, isLoading, error } = useAllTasks()

  if (isLoading) return <p>Cargando tareas...</p>
  if (error) return <p>Error al cargar tareas</p>

  const columns = [
    { key: 'userId', label: 'Usuario ID' },
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Tarea' },
    {
      key: 'completed',
      label: 'Estado',
      render: (task: any) => task.completed ? '✅' : '❌',
    },
  ]

  return (
    <div>
      <h2>Administración de Tareas</h2>
      <Table columns={columns} data={data} itemsPerPage={10} />
    </div>
  )
}
