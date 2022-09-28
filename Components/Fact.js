import { useState, useEffect } from "react";
import styles from "../styles/containers/facts.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import gsap from "gsap";

export const Fact = ({ value, text, maxValue = 100 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sleep = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };

    const startCount = async () => {
      for (let i = 0; i < value + 1; i++) {
        await sleep(1);
        setCount(i);
      }
    };

    startCount();
  }, []);

  return (
    <div className={styles.box_container}>
      <div className={styles.progressbar}>
        <CircularProgressbar
          value={count}
          text={`${count}%`}
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
