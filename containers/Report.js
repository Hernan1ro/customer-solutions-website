import { IndexReport } from "../Components/IndexReport";
import styles from "../styles/containers/report.module.css";

export const Report = () => {
  return (
    <section className={styles.report} id="text-sample">
      <img src="/assets/brandlogo/logo.webp" alt="customer solutions logo" />
      <h2>Diagnóstico madurez experiencia de servicio</h2>
      <h3>Index 360°</h3>
      <div className={styles.percentaje_result}>80%</div>
      <span>
        Es tu nivel de madurez en experiencia y satisfacción del cliente
      </span>
      <p>
        Eres un perfil maduro y consistente en tus acciones. Debes continuar en
        ese camino de la mejora permanente siempre enfocado en brindar
        experiencias inolvidables a tus empleados y clientes
      </p>
      <div className={styles.index_container}>
        <IndexReport />
        <IndexReport orientation="left" />
        <IndexReport />
        <IndexReport orientation="left" />
      </div>
      <h2>Perfil SX</h2>
      <div className={styles.chart_container}>
        <img
          className={styles.chart}
          src="/assets/reports/chart.png"
          alt="chart"
        />
        <img
          className={styles.logo}
          src="/assets/reports/logo.png"
          alt="logo"
        />
      </div>
    </section>
  );
};
