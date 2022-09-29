import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/section2.module.css";

export const Section2 = () => {
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
    <section className={styles.section1}>
      <div className={styles.container} ref={element}>
        {view && (
          <>
            <img
              src="./assets/Illustrations/evaluation.svg"
              alt="image description"
            />
            <div>
              <h2>El diagnostico es clave para actuar</h2>
              <p>
                Nuestras soluciones te permiten complementar, desarrollar y
                medir modelos de experiencia con tus clientes, proporcionándote
                resultados de crecimiento en ventas, en la findelización y en la
                recoment DE TUS CLIENTES
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
