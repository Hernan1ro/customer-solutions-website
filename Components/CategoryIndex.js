import { useState } from "react";
import styles from "../styles/pages/diagnostico.module.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

export const CategoryIndex = ({
  category,
  img,
  conclusion,
  heading,
  value,
  textHandler,
  colorHandler,
  lse,
  lie,
}) => {
  const color = colorHandler(value, lie, lse);
  const summary = textHandler(value, heading, lie, lse);
  const text = textHandler(value, conclusion, lie, lse);

  return (
    <div className={styles.category_index}>
      <h5>{category}</h5>
      <div>
        <CircularProgressbarWithChildren
          value={value}
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
          <img
            style={{ width: 80, marginTop: -5 }}
            src={`/assets/icons/${img}.svg`}
            alt={`${category}-image`}
          />
          <div
            style={{
              fontSize: 40,
              marginTop: 5,
              color: color,
            }}
          >
            <strong>{value}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <span style={{ color }}>{summary}</span>
      <p>{text}</p>
    </div>
  );
};
