'use client'
import { useUsers } from '../../hooks/useAllUsers';
import UserCard from '../../components/UserCard/UserCard';

export default function UsersPage() {
  const { data, isLoading, error } = useUsers()

  if (isLoading) return <p>Cargando usuarios...</p>
  if (error) return <p>Ocurrió un error al cargar los usuarios.</p>

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      {data.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}