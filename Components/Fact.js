import { useState, useEffect, useRef } from "react";
import styles from "../styles/containers/facts.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import gsap from "gsap";

export const Fact = ({ value, text, maxValue = 100 }) => {
  const [count, setCount] = useState(0);
  const fact = useRef(null);
  const [view, setView] = useState(false);

  useEffect(() => {
    //----------------show a dinamic counter------------//
    const sleep = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };

    const startCount = async () => {
      for (let i = 0; i < value + 1; i++) {
        await sleep(1);
        setCount(i);
      }
    };
    //-------------- intersection observer --------------//
    let options = {
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setView(true);
        setTimeout(() => {
          startCount();
        }, 500);
      }
    }, options);
    observer.observe(fact.current);
  }, []);

  return (
    <div ref={fact}>
      {view ? (
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
      ) : null}
    </div>
  );
};
