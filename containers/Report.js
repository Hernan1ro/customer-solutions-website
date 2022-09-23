import { IndexReport } from "../Components/IndexReport";
import styles from "../styles/containers/report.module.css";
import { RadarChart } from "../Components/RadarChart";
import { BarChart } from "../Components/BarChart";

export const Report = ({
  index,
  color,
  text,
  indicators,
  colorHandler,
  textHandler,
}) => {
  return (
    <section className={styles.report} id="text-sample">
      <img src="/assets/brandlogo/logo.webp" alt="customer solutions logo" />
      <h2>Diagnóstico madurez experiencia de servicio</h2>
      <h3>Index 360°</h3>
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
            console.log(obj);
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
      <h2>Perfil SX</h2>
      <div className={styles.chart_container}>
        <img
          className={styles.chart}
          src="/assets/reports/chart.png"
          alt="chart"
        />
        <img
          className={styles.logo}
          src="/assets/reports/logo.png"
          alt="logo"
        />
      </div>
      <div className={styles.radarChart_container}>
        <div id="radar">
          <RadarChart />
        </div>
        {/* <div id="bar">
          <BarChart />
        </div> */}
      </div>
    </section>
  );
};
