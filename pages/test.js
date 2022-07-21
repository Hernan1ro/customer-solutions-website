import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/test.module.css";
import Link from "next/link";

export default function Test() {
  return (
    <Layout page="Inicio">
      <section className={styles.container}>
        <div>
          <h2>Autoevaluación 360°</h2>
          <h3>Evaluación de la madurez</h3>
          <div>
            <form className={styles.form}>
              <p>1. ¿Tú eres?</p>
              <div className={styles.form_answer_container}>
                <div className={styles.input}>
                  <input type="radio" name="input1" value="emprendedor" />
                  <label for="input1"> Emprendedor</label>
                </div>
                <div className={styles.input}>
                  <input type="radio" name="input1" value="empleado" />
                  <label for="input1"> Empleado</label>
                </div>
                <div className={styles.input}>
                  <input
                    type="radio"
                    name="input1"
                    value="comerciante informal"
                  />
                  <label for="input1"> Comerciante informal</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>circular spinner</div>
      </section>
    </Layout>
  );
}
