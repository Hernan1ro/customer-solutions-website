import styles from "../styles/containers/facts.module.css";
import "react-circular-progressbar/dist/styles.css";
import { factsContent } from "../pages/api/facts";
import { Fact } from "../Components/Fact";
import {useRouter} from "next/router"

export const Facts = () => {
  const {locale} = useRouter();
  const { factsText } = factsContent[locale];
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>¿Sabías que?</h2>
        <div className={styles.grid}>
          {factsText.map((obj) => {
            const { value, text, maxValue } = obj;
            return (
              <Fact key={text} value={value} text={text} maxValue={maxValue} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
