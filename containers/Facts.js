import styles from "../styles/containers/facts.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Facts = () => {
  return (
    <section className={styles.facts_section}>
      <div className={styles.facts_container}>
        <h2>¿Sabías que?</h2>
        <div className={styles.grid}>
          <div className={styles.box_container}>
            <div className={styles.progressbar}>
              <CircularProgressbar
                value={93}
                text={"93%"}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: "#e57716",
                  textColor: "#e57716",
                  trailColor: "#404040",
                  backgroundColor: "#e57716",
                })}
              />
            </div>
            <p className={styles.text}>
              El <strong>93%</strong> de los clientes afirma que volvería a
              comprarle a una empresa que ofrece un servicio excepcional.
              (Hubsopt)
            </p>
          </div>
          <div className={styles.box_container}>
            <div className={styles.progressbar}>
              <CircularProgressbar
                value={80}
                text={"80%"}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: "#e57716",
                  textColor: "#e57716",
                  trailColor: "#404040",
                  backgroundColor: "#e57716",
                })}
              />
            </div>
            <p className={styles.text}>
              El <strong>80%</strong> de los clientes afirma que volvería a
              comprarle a una empresa que ofrece un servicio excepcional.
              (Hubsopt)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
