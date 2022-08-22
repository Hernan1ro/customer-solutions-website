import styles from "../styles/containers/facts.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Fact = ({ value, text, maxValue = 100 }) => {
  return (
    <div className={styles.box_container}>
      <div className={styles.progressbar}>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "20px",
            maxValue: maxValue,
            pathTransitionDuration: 0.5,
            pathColor: "#e57716",
            textColor: "#e57716",
            trailColor: "#404040",
            backgroundColor: "#e57716",
          })}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
