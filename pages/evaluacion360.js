import { Layout } from "../Layout/Layout";

export default function Evaluacion360() {
  return (
    <Layout page="Inicio">
      <section className={styles.container}>
        <img src="./assets/evaluacion360/heading.jpg" alt="evaluación 360" />
        <div>
          <h2>
            Evaluación de nivel de madurez en experiencia del cliente SX360°
          </h2>
          <p>
            La herramienta de diagnóstico gratuita que te permitirá conocer el
            grado de digitalización de tu empresa y los pasos a seguir para
            mejorar tu situación.
          </p>
          <div>
            <div>
              <img src="./assets/icons/check.svg" alt="check" />
              <span>30 variables</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
