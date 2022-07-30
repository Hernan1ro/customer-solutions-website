import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/evaluacion360.module.css";
import Link from "next/link";

export default function Evaluacion360() {
  return (
    <Layout page="Inicio">
      <section className={styles.container}>
        <div>
          <img
            className={styles.hero_img}
            src="./assets/evaluacion360/heading.jpg"
            alt="evaluación 360"
          />
        </div>
        <div className={styles.hero_text}>
          <h2>
            Evaluación de nivel de madurez en experiencia del cliente SX360°
          </h2>
          <p>
            La herramienta de diagnóstico automático que te permitirá conocer el
            grado de madurez de la experiencia de servicio y los recomendaciones
            para optimizar tus resultados
          </p>
          <div className={styles.bulletpoint_container}>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>30 variables</span>
            </div>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>
                4 dimensiones de la organización: estrategia + procesos +
                empleados + clientes
              </span>
            </div>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>
                Te entregamos un indicador del lugar donde estas: Index
                específico
              </span>
            </div>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>
                Conoce el perfil de madurez de tu experiencia y calidad de
                servicio.
              </span>
            </div>
          </div>
          <Link href="/test">
            <button>Iniciar test</button>
          </Link>
          <small>Tiempo estimado en realizar el test: 5 minutos</small>
        </div>
      </section>
    </Layout>
  );
}
