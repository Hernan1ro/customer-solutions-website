import styles from "../styles/components/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="">
          <img src="./assets/brandlogo/logo.webp" alt="" />
        </a>
        <nav>
          <a href="">Soluciones</a>
          <a href="">Servicios</a>
          <a href="">Contácto</a>
          <button>Evaluación de madurez</button>
        </nav>
      </div>
    </header>
  );
};
