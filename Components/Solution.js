import styles from "../styles/components/solution.module.css";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Solution = ({ image, title, description }) => {
  const element = useRef(null);
  const [view, setView] = useState(false);
  const { locale } = useRouter();

  const btnText = {
    "en-US": {
      btn: "Get started",
    },
    "es-ES": {
      btn: "Saber más",
    },
  };

  const { btn } = btnText[locale];

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
    <div ref={element}>
      {view && (
        <figure className={styles.solution}>
          <img src={`./assets/imagenes/${image}.jpg`} alt="product image" />
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <Link href="/contacto">
              <button>{btn}</button>
            </Link>
          </div>
        </figure>
      )}
    </div>
  );
};
