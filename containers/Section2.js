import styles from "../styles/containers/section2.module.css";

export const Section2 = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.container}>
        <img
          src="./assets/Illustrations/evaluation.svg"
          alt="image description"
        />
        <div>
          <h2>El diagnostico es clave para actuar</h2>
          <p>
            Nuestras soluciones te permiten complementar, desarrollar y medir
            modelos de experiencia con tus clientes, proporcionándote resultados
            de crecimiento en ventas, en la findelización y en la recoment DE
            TUS CLIENTES
          </p>
        </div>
      </div>
    </section>
  );
};
