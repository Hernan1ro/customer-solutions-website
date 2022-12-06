import styles from "../styles/containers/services.module.css";
import { Service } from "../Components/Service";
import { useRouter } from "next/router";

export const Services = () => {
  const { locale } = useRouter();

  const solutionsText = {
    "en-US": {
      h2: "Lines of business",
      btn: "Contact us",
      solutions: [
        {
          name: "Project Management",
          image: "gestion-proyecto",
          p: "We are a team prepared to support you in your needs in the management of your projects.",
        },
        {
          name: "Service and customer experience",
          image: "expcliente2",
          p: "We provide a qualitative and quantitative methodology to enhance your service experience model",
        },
      ],
    },
    "es-ES": {
      h2: "Líneas de negocio",
      btn: "Contáctanos",
      solutions: [
        {
          name: "Gestión de proyectos",
          image: "gestion-proyecto",
          p: "Somos un equipo de trabajo preparados para apoyarte en tus necesidades en la gestión de tus proyectos.",
        },
        {
          name: "Experiencia del servicio y el cliente",
          image: "expcliente2",
          p: "Brindamos una metodología cualitativa y cuantitativa para potencializar tu modelo de experiencia de servicio.",
        },
      ],
    },
  };

  const { solutions, h2, btn } = solutionsText[locale];

  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>{h2}</h2>
        <div className={styles.grid}>
          {solutions.map((solution) => {
            const { name, image, p } = solution;
            return <Service name={name} img={image} p={p} btn={btn} />;
          })}
        </div>
      </div>
    </section>
  );
};
