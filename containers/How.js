import styles from "../styles/containers/how.module.css";

export const How = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <img
          src="./assets/imagenes/como-lo-hacemos.jpg"
          alt="como lo hacemos"
        />
      </div>
    </section>
  );
};
