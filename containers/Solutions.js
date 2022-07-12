import styles from "../styles/containers/solutions.module.css";
import { Solution } from "../Components/Solution";
import { solutions } from "../pages/api/solutions";

export const Solutions = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>Nuestras soluciones</h2>
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
