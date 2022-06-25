import styles from "../styles/components/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="">
        <img src="./assets/brandlogo/logo.webp" alt="" />
      </a>
      <nav>
        <a href="">Soluciones</a>
        <a href="">Servicios</a>
        <a href="">Contácto</a>
        <a href="">Evaluación de madurez</a>
        <button>Inicia sesión</button>
      </nav>
    </header>
  );
};
