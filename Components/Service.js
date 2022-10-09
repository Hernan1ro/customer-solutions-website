import { useEffect, useState, useRef } from "react";
import styles from "../styles/containers/services.module.css";
import Link from "next/link";

export const Service = ({ name, img, p, btn }) => {
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
    <figure className={styles.solution} ref={element}>
      {view && (
        <>
          <img src={`/assets/imagenes/${img}.jpg`} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{p}</p>
            <Link href="/contacto">
              <button>{btn}</button>
            </Link>
          </div>
        </>
      )}
    </figure>
  );
};
