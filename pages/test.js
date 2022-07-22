import { useRef, useState } from "react";
import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/test.module.css";
import Link from "next/link";
import { customerQuestion } from "../pages/api/questions";
import { Question } from "../Components/Question";

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
  //-------------- checking progress ----------------//
  const handleChange = () => {
    const questionDiv = form.current.children;
    for (let i = 0; i < questionDiv.length - 1; i++) {
      let inputs = questionDiv[i].children[1].children;
      for (let j = 0; j < inputs.length; j++) {
        let check = inputs[j].children[0].checked;
        if (check) {
          setProgess(i + 1);
        }
      }
    }
  };

  return (
    <Layout page="Inicio">
      <section className={styles.container}>
        <div>
          <h2>Autoevaluación 360°</h2>
          <h3>Evaluación de la madurez</h3>
          <div>
            <form onSubmit={handleSubmit} className={styles.form} ref={form}>
              {customerQuestion.map((item) => {
                const { question, answers, id } = item;
                return (
                  <Question
                    question={question}
                    answers={answers}
                    inputNumber={id}
                    handleChange={handleChange}
                    onSubmit={handleChange}
                    key={id}
                  />
                );
              })}
              <button type="submit">Finalizar test</button>
            </form>
          </div>
        </div>
        <div>circular spinner | Progreso: {progress}%</div>
      </section>
    </Layout>
  );
}
