import styles from "../styles/containers/about.module.css";

export const About = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.container}>
        <img src="./assets/imagenes/nosotros.webp" alt="nosotros" />
        <div>
          <h2>El diagnostico es clave para actuar</h2>
          <p>
            Nuestras soluciones te permiten complementar, desarrollar y medir
            modelos de experiencia con tus clientes, proporcionándote resultados
            de crecimiento en ventas, en la findelización y en la recomendacion
            DE TUS CLIENTES
          </p>
        </div>
      </div>
    </section>
  );
};
