import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Bienvenido a la Plataforma</h2>
        <p>Desde aquí puedes navegar a la gestión de usuarios y tareas.</p>
      </main>
    </div>
  );
}
