import styles from "../styles/components/solution.module.css";
import { useEffect, useState, useRef } from "react";

export const Solution = ({ image, title, description }) => {
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
    <div ref={element}>
      {view && (
        <figure className={styles.solution}>
          <img src={`./assets/imagenes/${image}.jpg`} alt="product image" />
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <button>Saber más</button>
          </div>
        </figure>
      )}
    </div>
  );
};
