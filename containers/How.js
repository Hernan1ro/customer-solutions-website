import styles from "../styles/containers/how.module.css";
import { Stage } from "../Components/Stage";
import { stage } from "../pages/api/solutions";
export const How = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.container}>
        {stage.map((obj) => {
          const { title, img, span, li } = obj;
          return <Stage title={title} img={img} span={span} li={li} />;
        })}
      </div>
    </section>
  );
};
