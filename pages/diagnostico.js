import { useRef, useState } from "react";
import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/diagnostico.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/router";
import { CategoryIndex } from "../Components/CategoryIndex";
import { useSelector } from "react-redux";
import { diagnostic } from "../pages/api/diagnostic";

export default function Diagnostico() {
  const {
    result: { index, strategy, process, people, customers },
  } = useSelector((state) => state.index360Slice);

  const indicators = diagnostic(index, strategy, process, people, customers);

  // --------------data for the main index-------------------//
  const { category, conclusion, heading, value, lse, lie } = indicators[0];

  const textHandler = (value, text, lie, lse) => {
    if (value < lie) {
      return text.low;
    } else if (value >= lie && value < lse) {
      return text.middle;
    } else if (value >= lse) {
      return text.high;
    }
  };
  const colorHandler = (points, lie, lse) => {
    if (points < lie) {
      return "#f57070";
    } else if (points >= lie && points < lse) {
      return "#3aa8f7";
    } else if (points >= lse) {
      return "#e57716";
    }
  };

  const color = colorHandler(value, lie, lse);
  const summary = textHandler(value, heading, lie, lse);
  const text = textHandler(value, conclusion, lie, lse);
  //-------------styles ---------------//
  const hoverClass = (hex) => {
    switch (hex) {
      case "#f57070":
        return styles.redhover;
      case "#3aa8f7":
        return styles.bluehover;
      case "#e57716":
        return styles.orangehover;
    }
  };

  return (
    <Layout page="Diagnóstico 360°">
      <section className={`${styles.diagnostic}`}>
        <h2>Diagnóstico madurez experiencia de servicio</h2>
        <h3>Estos son tus resultados</h3>
        <div className={`${styles.index_container} `}>
          <h4>{category}</h4>
          <div className={styles.main_index}>
            <div className={styles.index_bar}>
              <div className={styles.progressbar}>
                <CircularProgressbar
                  value={index}
                  text={`${index}%`}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: "butt",
                    textSize: "20px",
                    fontWeight: "bold",
                    pathTransitionDuration: 0.5,
                    pathColor: color,
                    textColor: color,
                    trailColor: "#daedfc",
                    backgroundColor: color,
                  })}
                />
              </div>
              <span style={{ color }}>{summary}</span>
            </div>
            <div className={styles.index_description}>
              <img src="./assets/Illustrations/results.svg" alt="Index image" />
              <p>{text}</p>
              <button>
                Descarga tu informe completo
                <img
                  src="./assets/icons/download.svg"
                  alt="download complete inform"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.indexes_container}>
          {indicators.map((obj, index) => {
            const { category, conclusion, heading, value, lse, lie } = obj;
            if (index > 0) {
              return (
                <CategoryIndex
                  value={value}
                  category={category}
                  conclusion={conclusion}
                  heading={heading}
                  key={category}
                  textHandler={textHandler}
                  colorHandler={colorHandler}
                  lse={lse}
                  lie={lie}
                  hoverClass={hoverClass}
                />
              );
            }
          })}
        </div>
      </section>
    </Layout>
  );
}
