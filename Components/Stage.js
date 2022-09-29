import styles from "../styles/containers/how.module.css";
import { useState, useEffect, useRef } from "react";

export const Stage = ({ title, img, span, li, bottom, bg }) => {
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
    <div ref={section} className={styles.stage}>
      {visible && (
        <div
          style={{
            backgroundImage: `linear-gradient( to top, var(--primary-light) ${bg}%, transparent 35% )`,
          }}
        >
          <h4>{title}</h4>
          <img src={`/assets/imagenes/tree${img}.png`} alt={`arbol  ${img}`} />
          <div style={{ marginBottom: bottom }}>
            <span>{span}</span>
            <ul>
              {li.map((obj) => {
                return <li key={obj}>{obj}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
