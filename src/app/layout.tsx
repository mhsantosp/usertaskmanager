import React, { ReactNode } from 'react';
import Layout from '../components/Layout/Layout';
import "../styles/globals.scss";
import Providers from "./providers";

export const metadata = {
  title: "Gestión de usuarios y tareas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
