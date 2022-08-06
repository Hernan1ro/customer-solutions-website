import styles from "../styles/components/hamburger_menu.module.css";
import Link from "next/link";

export const HamburgerMenu = ({ handleClick }) => {
  return (
    <nav className={styles.nav}>
      <Link href="/#soluciones">
        <a>Soluciones</a>
      </Link>
      <Link href="/servicios">
        <a>Servicios</a>
      </Link>
      <Link href="/contacto">
        <a>Contácto</a>
      </Link>
      <Link href="/evaluacion360">
        <button>Evaluación de madurez</button>
      </Link>
      <div onClick={handleClick}>X</div>
    </nav>
  );
};
