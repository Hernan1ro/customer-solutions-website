import styles from "../styles/pages/servicios.module.css";
import Link from "next/link";

export const HeroServices = () => {
  return (
    <section className={styles.servicios}>
      <h1>
        Ayudamos a nuestros clientes <br /> a gestionar sus proyectos
      </h1>
      <Link href="/contacto">
        <button>Programemos una llamada</button>
      </Link>
    </section>
  );
};
