import styles from "../styles/containers/services.module.css";
import { Service } from "../Components/Service";

export const Services = () => {
  const solutions = [
    {
      name: "Gestión de proyectos",
      image: "gestion-proyecto",
      p: "Somos un equipo de trabajo preparados para apoyarte en tus necesidades en la gestión de tus proyectos.",
    },
    {
      name: "Experiencia del servicio y el cliente",
      image: "expcliente2",
      p: "Brindamos una metodología cualitativay cuantitativa para potencializar tu modelo de experiencia de servicio.",
    },
  ];

  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>Líneas de negocio</h2>
        <div className={styles.grid}>
          {solutions.map((solution) => {
            const { name, image, p } = solution;
            return <Service name={name} img={image} p={p} />;
          })}
        </div>
      </div>
    </section>
  );
};
