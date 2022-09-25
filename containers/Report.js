import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IndexReport } from "../Components/IndexReport";
import styles from "../styles/containers/report.module.css";
import { RadarChart } from "../Components/RadarChart";
// import { BarChart } from "../Components/BarChart";
import { ChartSX } from "../Components/ChartSX";
import { perfilSXDiagnostic } from "../pages/api/diagnostic";

export const Report = ({
  index,
  color,
  text,
  indicators,
  colorHandler,
  textHandler,
}) => {
  const {
    points: { strategy, process: process_, people, customers },
  } = useSelector((state) => state.index360Slice);

  const [categoryName, setCategoryName] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [quadrants, setQuadrants] = useState([]);
  const [quadrant, setQuadrant] = useState("");

  const indicatorsArr = [strategy, process_, people, customers];

  // ------------- calculatr points ------------- //

  let softDimension;
  let hardDimension;

  softDimension = indicatorsArr[2] + indicatorsArr[3];
  hardDimension = indicatorsArr[0] + indicatorsArr[1];

  //--------------------get profile -------------------//
  useEffect(() => {
    const getProfile = (hard, soft) => {
      if (hard < 60 && soft < 90) {
        setCategoryName("principiante");
      } else if (hard > 60 && soft < 90) {
        setCategoryName("conservador");
      } else if (soft > 90 && hard < 60) {
        setCategoryName("orientado");
      } else {
        setCategoryName("maduro");
      }
    };
    getProfile(hardDimension, softDimension);

    // ------------------ chart coor ---------------------//
    const axisValue = [
      { quadrant: "P1", hard: [0, 60], soft: [0, 30] },
      { quadrant: "P2", hard: [0, 60], soft: [30, 60] },
      { quadrant: "P3", hard: [0, 60], soft: [60, 90] },
      { quadrant: "O1", hard: [0, 60], soft: [90, 120] },
      { quadrant: "O2", hard: [0, 60], soft: [120, 150] },
      { quadrant: "03", hard: [0, 60], soft: [150, 180] },
      { quadrant: "C1", hard: [60, 90], soft: [0, 30] },
      { quadrant: "C2", hard: [60, 90], soft: [30, 60] },
      { quadrant: "C3", hard: [60, 90], soft: [60, 90] },
      { quadrant: "M1", hard: [60, 90], soft: [90, 120] },
      { quadrant: "M2", hard: [60, 90], soft: [120, 150] },
      { quadrant: "M3", hard: [60, 90], soft: [150, 180] },
    ];

    //----------------- getting quadrant name ------------ //
    const getQuadrant = (y, x, obj) => {
      const { hard, soft, quadrant: q } = obj;
      if (y >= hard[0] && y < hard[1] && x >= soft[0] && x < soft[1]) {
        setQuadrant(q);
      }
    };

    axisValue.map((value) => {
      getQuadrant(hardDimension, softDimension, value);
    });
  }, []);

  useEffect(() => {
    if (categoryName !== "") {
      const categoryObj = perfilSXDiagnostic.filter(
        (obj) => obj.name === categoryName
      );
      setConclusion(categoryObj[0].conclusion);
      setQuadrants(categoryObj[0].quadrant[quadrant]);
    }
  }, [categoryName]);

  return (
    <section className={styles.report} id="text-sample">
      <img src="/assets/brandlogo/logo.webp" alt="customer solutions logo" />
      <h2>Diagnóstico madurez experiencia de servicio</h2>
      <h3 style={{ color }}>Index 360°</h3>
      <div
        className={styles.percentaje_result}
        style={{ backgroundColor: color, boxShadow: `5px 5px 30px ${color}` }}
      >{`%${index}`}</div>
      <span style={{ color }}>
        Es tu nivel de madurez en experiencia y satisfacción del cliente
      </span>
      <p>{text}</p>
      <div className={styles.index_container}>
        {indicators.map((obj, index) => {
          const { category, conclusion, value, lse, lie, imgUrl, orientation } =
            obj;
          if (index > 0 && value > 0) {
            return (
              <IndexReport
                key={category}
                value={value}
                category={category}
                conclusion={conclusion}
                textHandler={textHandler}
                colorHandler={colorHandler}
                lse={lse}
                lie={lie}
                imgUrl={imgUrl}
                orientation={orientation}
              />
            );
          }
        })}
      </div>
      <div className={styles.radarChart_container}>
        <RadarChart indicators={indicators} />
      </div>
      <h2>Perfil SX</h2>
      <div className={styles.chart_component}>
        <ChartSX hardDimension={hardDimension} softDimension={softDimension} />
      </div>
      <div className={styles.sx_conclusion}>
        <h3>{`Tienes un perfil ${categoryName}`}</h3>
        <p>{conclusion}</p>
        <div className={styles.subconclusion}>
          <div>{quadrant}</div>
          <ul>
            {quadrants.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
