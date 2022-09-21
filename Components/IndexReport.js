import styles from "../styles/components/index_report.module.css";

export const IndexReport = ({ name, percent, description, orientation }) => {
  const style = {
    left: styles.left,
  };

  return (
    <div className={styles.index}>
      <img
        className={style[orientation]}
        src="/assets/reports/strategy.jpg"
        alt="estrategia"
      />
      <div className={styles.index_description}>
        <h3>Estrategia</h3>
        <div className={styles.percentaje_result_index}>79%</div>
        <p>
          La estrategia en experiencia y satisfacción de tus clientes y
          empleados esta consolidada. Tu empresa trabaja pensando en sus
          clientes/empleados, recuerda que con frecuencia surgen tendencias de
          las cuales debes estar enterado. Vas en el camino adecuado, continua
          en esta ruta.
        </p>
      </div>
    </div>
  );
};
