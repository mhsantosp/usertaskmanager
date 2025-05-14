import styles from "./Sidebar.module.scss";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Menú</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">🏠 Inicio</Link>
          </li>
          <li>
            <Link href="/users">👤 Usuarios</Link>
          </li>
          <li>
            <Link href="/admin/tasks">🧩 Admin Tareas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
