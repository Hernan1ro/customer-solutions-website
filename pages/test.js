import { useRef, useState } from "react";

import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/test.module.css";
import Link from "next/link";

export default function Test() {
  const form = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [progress, setProgess] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //-------------- Collect all data ----------------//
    const questionDiv = form.current.children;
    for (let i = 0; i < questionDiv.length - 1; i++) {
      let question = questionDiv[i].children[0].innerHTML;
      let inputs = questionDiv[i].children[1].children;

      for (let j = 0; j < inputs.length; j++) {
        let answer = inputs[j].children[0].value;
        let check = inputs[j].children[0].checked;
        if (check) {
          answers.push({ question, answer });
        }
      }
    }

    console.log(answers);
  };

  const handleChange = (e) => {
    const questionDiv = form.current.children;
    for (let i = 0; i < questionDiv.length - 1; i++) {
      let question = questionDiv[i].children[0].innerHTML;
      let inputs = questionDiv[i].children[1].children;
      for (let j = 0; j < inputs.length; j++) {
        let answer = inputs[j].children[0].value;
        let check = inputs[j].children[0].checked;
        if (check) {
          setProgess(i + 1);
        }
      }
    }
    console.log(progress);
  };

  return (
    <Layout page="Inicio">
      <section className={styles.container}>
        <div>
          <h2>Autoevaluación 360°</h2>
          <h3>Evaluación de la madurez</h3>
          <div>
            <form onSubmit={handleSubmit} className={styles.form} ref={form}>
              <div className={styles.question}>
                <p className="question">1. ¿Tú eres?</p>
                <div className={styles.form_answer_container}>
                  <div className={styles.input}>
                    <input
                      type="radio"
                      name="input1"
                      value="emprendedor"
                      onChange={handleChange}
                    />
                    <label htmlFor="input1"> Emprendedor</label>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="radio"
                      name="input1"
                      value="empleado"
                      onChange={handleChange}
                    />
                    <label htmlFor="input1"> Empleado</label>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="radio"
                      name="input1"
                      value="comerciante informal"
                      onChange={handleChange}
                    />
                    <label htmlFor="input1"> Comerciante informal</label>
                  </div>
                </div>
              </div>
              <div className={styles.question}>
                <p className="question">2. ¿Tú eres marika?</p>
                <div className={styles.form_answer_container}>
                  <div className={styles.input}>
                    <input
                      type="radio"
                      name="input2"
                      value="No se"
                      onChange={handleChange}
                    />
                    <label htmlFor="input2"> No se</label>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="radio"
                      name="input2"
                      value="puede que si"
                      onChange={handleChange}
                    />
                    <label htmlFor="input2"> Puede que si</label>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="radio"
                      name="input2"
                      value="puede que no"
                      onChange={handleChange}
                    />
                    <label htmlFor="input2">Puede que no</label>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="radio"
                      name="input2"
                      value="depende"
                      onChange={handleChange}
                    />
                    <label htmlFor="input2">depende</label>
                  </div>
                </div>
              </div>
              <button type="submit">Finalizar test</button>
            </form>
          </div>
        </div>
        <div>circular spinner | Progreso: {progress}%</div>
      </section>
    </Layout>
  );
}
