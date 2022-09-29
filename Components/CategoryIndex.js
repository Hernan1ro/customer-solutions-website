import { useState, useEffect, useRef } from "react";
import { IndexIcon } from "../Components/IndexIcon";
import styles from "../styles/pages/diagnostico.module.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

export const CategoryIndex = ({
  category,
  conclusion,
  heading,
  value,
  textHandler,
  colorHandler,
  lse,
  lie,
  hoverClass,
}) => {
  const color = colorHandler(value, lie, lse);
  const summary = textHandler(value, heading, lie, lse);
  const text = textHandler(value, conclusion, lie, lse);

  const [count, setCount] = useState(0);
  const element = useRef(null);
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
    observer.observe(element.current);
  }, []);

  return (
    <div
      ref={element}
      className={`${styles.category_index} ${hoverClass(color)}`}
    >
      <h5 style={{ color }}>{category}</h5>
      <div>
        <CircularProgressbarWithChildren
          value={count}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "20px",
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: color,
            trailColor: "#daedfc",
            backgroundColor: color,
          })}
        >
          <IndexIcon name={category} color={color} />
          <div
            style={{
              fontSize: 40,
              marginTop: -8,
              color: color,
            }}
          >
            <strong>{count}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <span style={{ color }}>{summary}</span>
      <p>{text}</p>
    </div>
  );
};
