import styles from "../styles/containers/how.module.css";

export const Stage = ({ title, img, span, li }) => {
  return (
    <div className={styles.stage}>
      <h4>{title}</h4>
      <img src={`/assets/imagenes/tree${img}.png`} alt={`arbol  ${img}`} />
      <span>{span}</span>
      <ul>
        {li.map((obj) => {
          return <li key={obj}>{obj}</li>;
        })}
      </ul>
    </div>
  );
};
