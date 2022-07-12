import styles from "../styles/containers/section1.module.css";

export const Section1 = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.container}>
        <img src="./assets/Illustrations/hero-2.svg" alt="image description" />
        <div>
          <h2>
            Ofrecemos diferentes alternativas para ayudar a tu empresa a
            potencializar su experiencia de cliente
          </h2>
          <p>
            Nuestras soluciones te permiten complementar, desarrollar y medir
            modelos de experiencia con tus clientes, proporcionándote resultados
            de crecimiento en ventas, en la findelización y en la recomendación
            de tus clientes
          </p>
          <button>Contáctanos</button>
        </div>
      </div>
    </section>
  );
};
