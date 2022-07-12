import styles from "../styles/containers/services.module.css";

export const Services = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>Líneas de negocio</h2>
        <div className={styles.grid}>
          <figure className={styles.solution}>
            <img
              src={`./assets/imagenes/gestion-proyecto.jpg`}
              alt="product image"
            />
            <div>
              <h4>Gestión de proyectos</h4>
              <p>
                Somos un equipo de trabajo preparados para apoyarte en tus
                necesidades en la gestión de tus proyectos.
              </p>
              <button>Contáctanos</button>
            </div>
          </figure>
          <figure className={styles.solution}>
            <img
              src={`./assets/imagenes/expcliente2.jpg`}
              alt="product image"
            />
            <div>
              <h4>Experiencia del servicio y el cliente</h4>
              <p>
                Brindamos una metodología cualitativay cuantitativa para
                potencializar tu modelo de experiencia de servicio.
              </p>
              <button>Contáctanos</button>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
