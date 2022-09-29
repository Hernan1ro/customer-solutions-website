import styles from "../styles/containers/how.module.css";
import { Stage } from "../Components/Stage";
import { stage } from "../pages/api/solutions";
export const How = () => {
  return (
    <section className={styles.facts_section}>
      <h2>¿Cómo lo hacemos?</h2>
      <div className={styles.container}>
        {stage.map((obj) => {
          const { title, img, span, li, bottom, bg } = obj;
          return (
            <Stage
              key={title}
              title={title}
              img={img}
              span={span}
              li={li}
              bottom={bottom}
              bg={bg}
            />
          );
        })}
      </div>
    </section>
  );
};
