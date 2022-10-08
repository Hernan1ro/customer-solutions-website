import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/section2.module.css";
import { useRouter } from "next/router";

export const Section2 = () => {
  const element = useRef(null);
  const [view, setView] = useState(false);
  const { locale } = useRouter();

  const sectionText = {
    "en-US": {
      h2: "Diagnosis is key to action",
      p: "It facilitates decision-making in relation to improving the quality of customer service. It allows to identify the weak points in the provision of customer service and determine the necessary actions to improve it.",
    },
    "es-ES": {
      h2: "El diagnostico es clave para actuar",
      p: "Facilita la toma de decisiones en relación a la mejora de la calidad de servicio al cliente. Permite identificar los puntos débiles en la prestación del servicio al cliente y determinar las acciones necesarias para mejorarla.",
    },
  };

  const { h2, p } = sectionText[locale];

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
              <h2>{h2}</h2>
              <p>{p}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
