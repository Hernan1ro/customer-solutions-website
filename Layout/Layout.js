import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/layout/Layout.module.css";

export const Layout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>Sabia | {page}</title>
        <meta
          name="description"
          content="Somos una empresa centrada en el cliente que utilizamos metodologías estándares y agiles. Nuestra filosofía es brindarte grandes experiencias generando relaciones a largo plazo."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main_container}>{children}</main>
    </>
  );
};
