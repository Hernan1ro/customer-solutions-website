import { useRef, useState, useEffect } from "react";
import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/test.module.css";
import Link from "next/link";
import { customerQuestion } from "../pages/api/questions";
import { Question } from "../Components/Question";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
  const handleChange = (id) => {
    const questionDiv = form.current.children;
    for (let i = 0; i < questionDiv.length - 1; i++) {
      let inputs = questionDiv[i].children[1].children;
      for (let j = 0; j < inputs.length; j++) {
        let check = inputs[j].children[0].checked;
        if (check && progress < 5) {
          setProgess(progress + 1);
        }
      }
    }
    if (id > 0 && id < 5) {
      console.log(document.querySelector(`#question_${id}`));
      // --------- Scroll to the next question -------------//
      document.querySelector(`#question_${id + 1}`).scrollIntoView({
        behavior: "smooth",
      });
    }
    if (id === 5) {
      console.log("scroll final");
      // --------- Scroll to the next question -------------//
      document.querySelector(`#submit_btn`).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  //------------- hide progressbar when test finishes ---------- //

  // useEffect(() => {
  //   let options = {
  //     rootMargin: "0px",
  //     threshold: 1,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     const { isIntersecting } = entries[0];

  //     if (isIntersecting) {
  //       console.log("Observando");
  //     } else {
  //       console.log("No observando");
  //     }
  //   }, options);

  //   observer.observe(button.current);
  // }, [button]);

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
      </section>
      <div className={styles.progressbar}>
        <div className={styles.progressbar_container}>
          <h4>10% completado</h4>
          <div className={styles.bg_container}>
            <div className={styles.bg}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
