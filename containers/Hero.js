import styles from "../styles/containers/hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1>
          Te <strong>ayudamos</strong> a <br />
          <strong>potencializar</strong> la <br />
          <strong>experiencia</strong> de tus <br />
          <strong>clientes</strong>
        </h1>
        <h3>CopyWriting effect</h3>
        <button>Empieza ahora</button>
      </div>
      <img src="./assets/illustrations/hero-img.svg" alt="hero landing" />
    </section>
  );
};
