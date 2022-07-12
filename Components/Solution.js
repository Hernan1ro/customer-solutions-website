import styles from "../styles/components/solution.module.css";

export const Solution = () => (
  <figure className={styles.solution}>
    <img src="./assets/imagenes/expcliente.jpg" alt="product image" />
    <div>
      <h4>Evaluación de nivel de madurez en experiencia del cliente SX360°</h4>
      <p>
        Esta herramienta de diagnostico te permitirá conocer el grado de madurez
        de la experiencia de servicio de tu empresa y el camino a seguir para
        mejorarlo.
      </p>
      <button>Saber más</button>
    </div>
  </figure>
);
