import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/evaluacion360.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Evaluacion360() {
  const { locale } = useRouter();

  const testText = {
    "en-US": {
      h2: "SX360° Customer Experience Maturity Test",
      p: "The automatic diagnostic tool that will allow you to know the degree of maturity of the service experience and the recommendations to optimize your results",
      span1: "30 variables",
      span2:
        "4 dimensions of the organization: strategy + processes + employees + customers",
      span3: "We give you an indicator of where you are: Specific index",
      span4:
        "Know the maturity profile of your experience and quality of service",
      btn: "Start test",
      timeframe: "Estimated time to take the test: 3 minutes",
    },
    "es-ES": {
      h2: "Evaluación de nivel de madurez en experiencia del cliente SX360°",
      p: "La herramienta de diagnóstico automático que te permitirá conocer el grado de madurez de la experiencia de servicio y recomendaciones para optimizar tus resultados",
      span1: "30 variables",
      span2:
        "4 dimensiones de la organización: estrategia + procesos + empleados + clientes",
      span3:
        "Te entregamos un indicador del lugar donde estas: Index específico",
      span4:
        "Conoce el perfil de madurez de tu experiencia y calidad de servicio",
      btn: "iniciar test",
      timeframe: "Tiempo estimado en realizar el test: 3 minutos",
    },
  };

  const { h2, p, span1, span2, span3, span4, btn, timeframe } =
    testText[locale];

  return (
    <Layout page="Evaluación 360°">
      <section className={styles.container}>
        <div className={styles.hero_img_container}>
          <Image
            priority
            layout="fill"
            className={styles.hero_img}
            src="/assets/evaluacion360/heading.jpg"
            alt="evaluación 360"
          />
        </div>
        <div className={styles.hero_text}>
          <h2>{h2}</h2>
          <p>{p}</p>
          <div className={styles.bulletpoint_container}>
            <div>
              <img src="/assets/icons/check.svg" alt="check" />
              <span>{span1}</span>
            </div>
            <div>
              <img src="/assets/icons/check.svg" alt="check" />
              <span>{span2}</span>
            </div>
            <div>
              <img src="/assets/icons/check.svg" alt="check" />
              <span>{span3}</span>
            </div>
            <div>
              <img src="/assets/icons/check.svg" alt="check" />
              <span>{span4}</span>
            </div>
          </div>
          <Link href="/test360">
            <button>{btn}</button>
          </Link>
          <small>{timeframe}</small>
        </div>
      </section>
    </Layout>
  );
}
