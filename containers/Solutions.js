import styles from "../styles/containers/solutions.module.css";
import { Solution } from "../Components/Solution";

export const Solutions = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>Nuestras soluciones</h2>
        <div className={styles.grid}>
          <Solution />
          <Solution />
          <Solution />
          <Solution />
          <Solution />
          <Solution />
        </div>
      </div>
    </section>
  );
};
