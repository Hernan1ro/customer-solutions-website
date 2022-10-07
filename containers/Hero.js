import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../styles/containers/hero.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const heroContent = {
  "en-US": {
    h1: "We help you to enhance the experience of your customers",
    p1: "Improve the quality of your service",
    p2: "Get recommendations from your customers",
    p3: "Know your customers",
    p4: "Build customer loyalty",
    p5: "Develop your strategy",
    p6: "Earn more customers",
    button: "Get started",
  },
  "es-ES": {
    h1: "Te ayudamos a potencializar la experiencia de tus clientes",
    p1: "Mejora la calidad de tu servicio",
    p2: "Obten recomendaciones de tus clientes",
    p3: "Conoce a tus clientes",
    p4: "Fideliza a tus clientes",
    p5: "Desarrolla tu estrategia",
    p6: "Gana más clientes",
    button: "Empieza ahora",
  },
};

export const Hero = () => {
  const { locale, locales, defaultLocale } = useRouter();
  const { h1, p1, p2, p3, p4, p5, p6, button } = heroContent[locale];

  // Typewriter configurations

  const { text } = useTypewriter({
    words: [p1, p2, p3, p4, p5, p6],
    loop: 0,
    typeSpeed: 160,
    deleteSpeed: 160,
  });
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero}>
        <div>
          <h1>{h1}</h1>
          <h3>
            {text}
            <Cursor />
          </h3>
          <Link href="/evaluacion360">
            <button>{button}</button>
          </Link>
        </div>
        <img src="./assets/illustrations/hero-img.svg" alt="hero landing" />
      </div>
    </section>
  );
};
