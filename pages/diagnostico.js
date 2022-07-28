import { useRef, useState } from "react";
import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/diagnostico.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/router";

export default function Diagnostico() {
  return (
    <Layout page="Test">
      <section className={styles.diagnostic}>
        <h2>Diagnóstico madurez experiencia de servicio</h2>
        <h3>Estos son tus resultados</h3>
        <div className={styles.index_container}>
          <h4>Index 360°</h4>
          <div className={styles.main_index}>
            <div className={styles.index_bar}>
              <div className={styles.progressbar}>
                <CircularProgressbar
                  value={93}
                  text={"93%"}
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
                />
              </div>
              <span>
                Tu nivel de madurez en experiencia y satisfacción del cliente es
                de XX%
              </span>
            </div>
            <div className={styles.index_description}>
              <img src="./assets/Illustrations/results.svg" alt="Index image" />
              <p>
                {" "}
                Eres un perfil maduro y consistente en tus acciones. Debes
                continuar en ese camino de la mejora permanente siempre enfocado
                en brindar experiencias inolvidables a tus empleados y clientes
              </p>
              <button>
                Descarga tu informe completo
                <img src="./assets/icons/download.svg" alt="download" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
