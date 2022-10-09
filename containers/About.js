import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/about.module.css";
import { useRouter } from "next/router";

export const About = () => {
  const element = useRef(null);
  const [view, setView] = useState(false);
  const { locale } = useRouter();

  const sectionText = {
    "en-US": {
      h2: "About us",
      p: "We are a customer-centric company that uses standard and agile methodologies. Our philosophy is to provide you with great experiences generating long-term relationships.",
    },
    "es-ES": {
      h2: "Nosotros",
      p: "Somos una empresa centrada en el cliente que utilizamos metodologías estándares y agiles. Nuestra filosofía es brindarte grandes experiencias generando relaciones a largo plazo.",
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
    <section className={styles.section1} ref={element}>
      <div className={styles.container}>
        {view && (
          <>
            <img src="/assets/imagenes/nosotros.webp" alt={h2} />
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
