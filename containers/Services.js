import styles from "../styles/containers/facts.module.css";

export const Services = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>Líneas de negocio</h2>
        <div className={styles.grid}></div>
      </div>
    </section>
  );
};
