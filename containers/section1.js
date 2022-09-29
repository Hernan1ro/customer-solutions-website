import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/section1.module.css";

export const Section1 = () => {
  const fact = useRef(null);
  const [view, setView] = useState(false);

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
        console.log("Hello");
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
            <h2>
              Ofrecemos diferentes alternativas para ayudar a tu empresa a
              potencializar su experiencia de cliente
            </h2>
            <p>
              Nuestras soluciones te permiten complementar, desarrollar y medir
              modelos de experiencia con tus clientes, proporcionándote
              resultados de crecimiento en ventas, en la findelización y en la
              recomendación de tus clientes
            </p>
            <button>Contáctanos</button>
          </div>
        )}
      </div>
    </section>
  );
};
