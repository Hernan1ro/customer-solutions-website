import styles from "../styles/components/solution.module.css";

export const Solution = ({ image, title, description }) => (
  <figure className={styles.solution}>
    <img src={`./assets/imagenes/${image}.jpg`} alt="product image" />
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <button>Saber más</button>
    </div>
  </figure>
);
