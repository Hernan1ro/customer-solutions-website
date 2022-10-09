import styles from "../styles/pages/servicios.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const HeroServices = () => {
  const { locale } = useRouter();

  const heroText = {
    "en-US": {
      h1: "We help our clients to manage their projects",
      btn: "Let's have a meeting",
    },
    "es-ES": {
      h1: "Ayudamos a nuestros clientes a gestionar sus proyectos",
      btn: "Programemos una llamada",
    },
  };

  const { h1, btn } = heroText[locale];
  return (
    <section className={styles.servicios}>
      <h1>{h1}</h1>
      <Link href="/contacto">
        <button>{btn}</button>
      </Link>
    </section>
  );
};
