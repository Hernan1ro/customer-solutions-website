import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/section1.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const Section1 = () => {
  const fact = useRef(null);
  const [view, setView] = useState(false);
  const { locale } = useRouter();

  const sectionText = {
    "en-US": {
      h2: "We offer different alternatives to help your company to enhance its customer experience",
      p: "Our solutions allow you to complement, develop and measure models of experience with your customers, providing you with results of growth in sales, in the loyalty and recommendation from your clients",
      button: "Contact us",
    },
    "es-ES": {
      h2: "Ofrecemos diferentes alternativas para ayudar a tu empresa a potencializar su experiencia de cliente",
      p: "Nuestras soluciones te permiten complementar. Desarrollar y medir modelos de experiencia con tus clientes, proporcionándote resultados de crecimiento en ventas, en la fidelización y en la recomendación de tus clientes",
      button: "Contáctanos",
    },
  };

  const { h2, p, button } = sectionText[locale];

  useEffect(() => {
    //-------------- intersection observer --------------//
    let options = {
      rootMargin: "-60px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setView(true);
      }
    }, options);
    observer.observe(fact.current);
  }, []);

  return (
    <section className={styles.section1} ref={fact}>
      <div className={styles.container}>
        {view && (
          <img
            src="./assets/Illustrations/hero-2.svg"
            alt="image description"
          />
        )}
        {view && (
          <div>
            <h2>{h2}</h2>
            <p>{p}</p>
            <Link href="/contacto">
              <button>{button}</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
