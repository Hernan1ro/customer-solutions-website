import { useRef, useState, useEffect } from "react";
import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/test.module.css";
import { customerQuestion } from "../pages/api/questions";
import { Question } from "../Components/Question";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/router";

export default function Test() {
  const form = useRef(null);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [progress, setProgess] = useState(0);
  const router = useRouter();

  const percent = (progress / customerQuestion.length) * 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    //---------------check if the form has been answered ------------//
    if (progress < customerQuestion.length) {
      setError(true);
      setTimeout(() => {
        document.querySelector(`#error`).scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
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

    router.push("/autoevaluacion360");
  };
  const handleChange = (id) => {
    //-------------- checking progress ----------------//
    const questionDiv = form.current.children;
    for (let i = 0; i < questionDiv.length - 1; i++) {
      let inputs = questionDiv[i].children[1].children;
      for (let j = 0; j < inputs.length; j++) {
        let check = inputs[j].children[0].checked;
        if (check && progress < customerQuestion.length) {
          setProgess(progress + 1);
        }
      }
    }
    if (id > 0 && id < customerQuestion.length) {
      // --------- Scroll to the next question -------------//
      document.querySelector(`#question_${id + 1}`).scrollIntoView({
        behavior: "smooth",
      });
    }
    if (id === customerQuestion.length) {
      // --------- Scroll to the submit button -------------//
      document.querySelector(`#submit_btn`).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Layout page="Test">
      <section className={styles.container}>
        <div>
          <h2>Autoevaluación 360°</h2>
          <h3>Antes de comenzar primero cuentanos un poco sobre ti</h3>
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
              <button id="submit_btn" type="submit">
                Continuar test
              </button>
              {error ? (
                <span id="error">
                  Debes responder todas las preguntas para poder continuar
                </span>
              ) : null}
            </form>
          </div>
        </div>
        <div>
          <div className={styles.circular_progressbar}>
            <CircularProgressbar
              value={progress}
              minValue={0}
              maxValue={5}
              text={`${progress}/5 respuestas`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "12px",
                pathTransitionDuration: 0.5,
                pathColor: "#e57716",
                textColor: "#e57716",
                trailColor: "#e7f5ff",
                backgroundColor: "#e57716",
              })}
            />
          </div>
        </div>
        <img
          className={styles.bg_image}
          src="./assets/icons/customer_logo.svg"
          alt="Customer solutions"
        />
      </section>
      <div className={styles.progressbar}>
        <div className={styles.progressbar_container}>
          <h4>{`${percent}% completado`}</h4>
          <div className={styles.bg_container}>
            <div className={styles.bg} style={{ width: `${percent}%` }}></div>
          </div>
          {percent === 100 ? (
            <img
              src="./assets/icons/check_list.svg"
              alt="Cuestionario completado"
            ></img>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
