import styles from "../styles/containers/facts.module.css";
import "react-circular-progressbar/dist/styles.css";
import { factsText } from "../pages/api/facts";
import { Fact } from "../Components/Fact";

export const Facts = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>¿Sabías que?</h2>
        <div className={styles.grid}>
          {factsText.map((obj) => {
            const { value, text } = obj;
            return <Fact key={value} value={value} text={text} />;
          })}
          {factsText.map((obj) => {
            const { value, text } = obj;
            return <Fact key={value} value={value} text={text} />;
          })}
        </div>
      </div>
    </section>
  );
};
