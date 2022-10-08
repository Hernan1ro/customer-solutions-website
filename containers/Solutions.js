import styles from "../styles/containers/solutions.module.css";
import { Solution } from "../Components/Solution";
import { solutionsText } from "../pages/api/solutions";
import { useRouter } from "next/router";

export const Solutions = () => {
  const { locale } = useRouter();
  const { solutions } = solutionsText[locale];

  const h2Text = {
    "en-US": {
      h2: "Our solutions",
    },
    "es-ES": {
      h2: "Nuestras soluciones",
    },
  };

  const { h2 } = h2Text[locale];

  return (
    <section className={styles.facts_section} id="soluciones">
      <div className={styles.facts_container}>
        <h2>{h2}</h2>
        <div className={styles.grid}>
          {solutions.map((product) => {
            const { image, title, description } = product;
            return (
              <Solution
                image={image}
                title={title}
                description={description}
                key={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
