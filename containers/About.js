import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/about.module.css";

export const About = () => {
  const element = useRef(null);
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
      }
    }, options);
    observer.observe(element.current);
  }, []);
  return (
    <section className={styles.section1} ref={element}>
      <div className={styles.container}>
        {view && (
          <>
            <img src="./assets/imagenes/nosotros.webp" alt="nosotros" />
            <div>
              <h2>El diagnostico es clave para actuar</h2>
              <p>
                Nuestras soluciones te permiten complementar, desarrollar y
                medir modelos de experiencia con tus clientes, proporcionándote
                resultados de crecimiento en ventas, en la findelización y en la
                recomendacion DE TUS CLIENTES
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
