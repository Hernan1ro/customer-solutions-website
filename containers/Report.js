import { IndexReport } from "../Components/IndexReport";
import styles from "../styles/containers/report.module.css";
import { RadarChart } from "../Components/RadarChart";
import { BarChart } from "../Components/BarChart";
import { ChartSX } from "../Components/ChartSX";

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
      <div className={styles.chart_component}>
        <ChartSX indicators={indicators} />
      </div>
      <div className={styles.sx_conclusion}>
        <h5>Tienes un perfil maduro</h5>
        <p>
          Estas en el camino correcto, tu estrategia esta definida hacia la
          orientación de la experiencia del cliente soportada por procesos,
          canales y tiempos que impactan positivamente. Tus empleados conocen la
          estrategia y filosofia de la empresa y la importancia del cliente en
          esta, adicional estan capacitados y formados para brindar experiencias
          inolvidables y recomiendan su empresa y trabajo a familiares y amigos.
          Conoces ademas los momentos criticos o prioritarios de tus clientes,
          mides su satisfacción y recomendación con periodicidad, creas
          servicios pensando en tus clientes.{" "}
        </p>
        <div>
          <div>M1</div>
          <div>
            <span>
              Orientar esfuerzos a empleados y clientes, estan en la fase 1 de
              este cuadrante, son los maduros iniciales.
            </span>
            <span>
              Empleados y clientes deben ser prioridad para la ruta WOW
            </span>
          </div>
        </div>
      </div>
      <div className={styles.radarChart_container}>
        <div id="radar">
          <RadarChart indicators={indicators} />
        </div>
        {/* <div id="bar">
          <BarChart />
        </div> */}
      </div>
    </section>
  );
};
