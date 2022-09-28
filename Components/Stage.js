import styles from "../styles/containers/how.module.css";
import { useState, useEffect, useRef } from "react";

export const Stage = ({ title, img, span, li, bottom }) => {
  const section = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let options = {
      rootMargin: "-600px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setVisible(true);
      }
    }, options);
    observer.observe(section.current);
  }, [section]);

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setVisible(true);
      }
    });
    observer.observe(section.current);
  });

  return (
    <div className={styles.stage}>
      <h4 ref={section}>{title}</h4>
      {visible ? (
        <img src={`/assets/imagenes/tree${img}.png`} alt={`arbol  ${img}`} />
      ) : null}
      <div style={{ marginBottom: bottom }}>
        <span>{span}</span>
        <ul>
          {li.map((obj) => {
            return <li key={obj}>{obj}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
