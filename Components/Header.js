import Link from "next/link";
import styles from "../styles/components/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a>
            <img src="./assets/brandlogo/logo.webp" alt="" />
          </a>
        </Link>
        <nav>
          <Link href="/#soluciones">
            <a>Soluciones</a>
          </Link>
          <Link href="/servicios">
            <a>Servicios</a>
          </Link>
          <Link href="/contacto">
            <a>Contácto</a>
          </Link>
          <button>Evaluación de madurez</button>
        </nav>
      </div>
    </header>
  );
};
