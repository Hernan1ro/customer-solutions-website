import styles from "../styles/pages/diagnostico.module.css";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

export const CategoryIndex = ({
  category,
  img,
  percentage,
  heading,
  description,
  value,
}) => {
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
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <img
            style={{ width: 80, marginTop: -5 }}
            src="./assets/icons/strategy.svg"
            alt="category-image"
          />
          <div style={{ fontSize: 40, marginTop: 5, color: "#e57716" }}>
            <strong>{value}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <span>
        Tu nivel de madurez en experiencia y satisfacción del cliente es de XX%
      </span>
      <p>
        {" "}
        La estrategia en experiencia y satisfacción de tus clientes y empleados
        esta consolidada. Tu empresa trabaja pensando en sus clientes/empleados,
        recuerda que con frecuencia surgen tendencias de las cuales debes estar
        enterado. Vas en el camino adecuado, continua en esta ruta.
      </p>
    </div>
  );
};
