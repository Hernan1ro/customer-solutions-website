import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../styles/containers/hero.module.css";

export const Hero = () => {
  // Typewriter configurations
  const { text } = useTypewriter({
    words: [
      "Mejora la calidad de tu servicio",
      "Obten recomendaciones de tus clientes",
      "Conoce a tus clientes",
      "Fideliza a tus clientes",
      "Desarrolla tu estrategia",
      "Gana más clientes",
    ],
    loop: 0,
    typeSpeed: 160,
    deleteSpeed: 160,
  });
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero}>
        <div>
          <h1>
            Te ayudamos a <br />
            potencializar la <br />
            experiencia de tus <br />
            clientes
          </h1>
          <h3>
            {text}
            <Cursor />
          </h3>
          <button>Empieza ahora</button>
        </div>
        <img src="./assets/illustrations/hero-img.svg" alt="hero landing" />
      </div>
    </section>
  );
};
