import React, { ReactNode } from 'react';
import styles from "./Layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
