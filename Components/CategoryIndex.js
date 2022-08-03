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
}) => {
  const [color, setColor] = useState();
  // Handling dinamic responses //
  const textHandler = (text) => {
    if (value < 40) {
      return text.low;
    } else if (value >= 40 && value < 70) {
      return text.middle;
    } else if (value >= 70) {
      return text.high;
    }
  };
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
            pathColor: "#e57716",
            textColor: "#e57716",
            trailColor: "#daedfc",
            backgroundColor: "#e57716",
          })}
        >
          <img
            style={{ width: 80, marginTop: -5 }}
            src={`/assets/icons/${img}.svg`}
            alt={`${category}-image`}
          />
          <div style={{ fontSize: 40, marginTop: 5, color: "#e57716" }}>
            <strong>{value}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <span>{textHandler(heading)}</span>
      <p>{textHandler(conclusion)}</p>
    </div>
  );
};
