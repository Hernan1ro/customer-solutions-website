import Head from "next/head";
import styles from "../styles/Layout/Layout.module.css";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const Layout = ({ children, page, hide }) => {
  return (
    <>
      <Head>
        <title>Customer Solutions | {page}</title>
        <meta
          name="description"
          content="Somos una empresa centrada en el cliente que utilizamos metodologías estándares y agiles. Nuestra filosofía es brindarte grandes experiencias generando relaciones a largo plazo."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header hide={hide} />
      <main className={styles.main_container}>{children}</main>
      {!hide ? <Footer /> : null}
    </>
  );
};
