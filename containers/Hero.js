import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../styles/containers/hero.module.css";

export const Hero = () => {
  // Typewriter configurations
  const { text } = useTypewriter({
    words: [
      "Somos expertos en mejorar la calidad de tu servicio",
      "Clientes satisfechos son clientes que te recomiendan",
      "¿Conoces el nivel de recomendación de tus clientes?",
      "Clientes satisfechos son clientes que vuelven",
      "Trabajamos en tu estrategia, los empleados, los procesos y los clientes",
      "Adquirir un cliente nuevo es más costoso que mantener uno ya existente",
    ],
    loop: 0,
    typeSpeed: 160,
    deleteSpeed: 160,
  });
  return (
    <section className={styles.hero}>
      <div>
        <h1>
          Te <strong>ayudamos</strong> a <br />
          <strong>potencializar</strong> la <br />
          <strong>experiencia</strong> de tus <br />
          <strong>clientes</strong>
        </h1>
        <h3>
          {text}
          <Cursor />
        </h3>
        <button>Empieza ahora</button>
      </div>
      <img src="./assets/illustrations/hero-img.svg" alt="hero landing" />
    </section>
  );
};
