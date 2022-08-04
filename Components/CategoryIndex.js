import { useState } from "react";
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
          <IndexIcon name={category} color={color} />
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
