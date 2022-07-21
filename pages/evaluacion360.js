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
            La herramienta de diagnóstico gratuita que te permitirá conocer el
            grado de digitalización de tu empresa y los pasos a seguir para
            mejorar tu situación.
          </p>
          <div className={styles.bulletpoint_container}>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>30 variables</span>
            </div>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>4 dimensiones</span>
            </div>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>Index especifico</span>
            </div>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>Perfil de madurez</span>
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
