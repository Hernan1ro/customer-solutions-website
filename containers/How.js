import styles from "../styles/containers/how.module.css";
import { Stage } from "../Components/Stage";
import { stageText } from "../pages/api/solutions";
import { useRouter } from "next/router";
export const How = () => {
  const { locale } = useRouter();

  const { stage, h2 } = stageText[locale];

  return (
    <section className={styles.facts_section}>
      <h2>{h2}</h2>
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
