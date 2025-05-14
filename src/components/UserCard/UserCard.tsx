import styles from './UserCard.module.scss'
import Link from 'next/link'

export default function UserCard({ user }: { user: any }) {
  return (
    <div className={styles.card}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <Link href={`/users/${user.id}`}>
        <button>Ver tareas</button>
      </Link>
    </div>
  )
}
