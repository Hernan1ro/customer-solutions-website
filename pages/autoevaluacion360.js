import { useRef, useState } from "react";
import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/test.module.css";
import { test360Questions } from "../pages/api/questions";
import { Question } from "../Components/Question";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/router";

export default function Test() {
  const form = useRef(null);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [progress, setProgess] = useState(0);
  const [strategy, setStrategy] = useState(0);
  const [process, setProcess] = useState(0);
  const [people, setPeople] = useState(0);
  const [customer, setCustomer] = useState(0);

  const router = useRouter();

  const percent = ((progress / test360Questions.length) * 100).toFixed(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //---------------check if the form has been answered ------------//
    // if (progress < test360Questions.length) {
    //   setError(true);
    //   setTimeout(() => {
    //     document.querySelector(`#error`).scrollIntoView({
    //       behavior: "smooth",
    //     });
    //   }, 100);
    //   setTimeout(() => {
    //     setError(false);
    //   }, 3000);
    //   return;
    // }
    //-------------- Collect all data ----------------//
    const questionDiv = form.current.children;
    for (let i = 0; i < questionDiv.length - 1; i++) {
      let question = questionDiv[i].children[0].innerHTML;
      let dimension = questionDiv[i].children[0].attributes[1].value;
      let inputs = questionDiv[i].children[1].children;

      for (let j = 0; j < inputs.length; j++) {
        let answer = inputs[j].children[0].value;
        let points = Number(inputs[j].children[0].attributes[2].value);
        let check = inputs[j].children[0].checked;
        if (check) {
          answers.push({ question, answer, dimension, points });
        }
      }
    }

    handleData(answers);

    // router.push("/diagnostico");
  };

  // ---------- Calculate index 360 ----------------- //
  function handleData(data) {
    let strategyCount = 0;
    let processCount = 0;
    let peopleCount = 0;
    let customersCount = 0;
    let indexCount = 0;

    data.map((item) => {
      const { dimension, points } = item;
      if (dimension === "strategy") {
        strategyCount += points;
      } else if (dimension === "process") {
        processCount += points;
      } else if (dimension === "people") {
        peopleCount += points;
      } else if (dimension === "customers") {
        customersCount += points;
      }
      indexCount += points;
    });

    console.log(strategyCount, processCount, peopleCount, customersCount);
    const indexStrategy = calculateIndex(strategyCount, 60);
    const indexProcess = calculateIndex(processCount, 60);
    const indexPeople = calculateIndex(peopleCount, 90);
    const indexCustomers = calculateIndex(customersCount, 90);
    const indexTotal = calculateIndex(indexCount, 300);

    console.log(
      indexStrategy,
      indexProcess,
      indexPeople,
      indexCustomers,
      indexTotal
    );
  }

  function calculateIndex(points, standar) {
    return Number(((points / standar) * 100).toFixed(0));
  }

  const handleChange = (id) => {
    //-------------- checking progress ----------------//
    const questionDiv = form.current.children;
    for (let i = 0; i < questionDiv.length - 1; i++) {
      let inputs = questionDiv[i].children[1].children;
      for (let j = 0; j < inputs.length; j++) {
        let check = inputs[j].children[0].checked;
        if (check && progress < test360Questions.length) {
          setProgess(progress + 1);
        }
      }
    }
    if (id > 0 && id < test360Questions.length) {
      // --------- Scroll to the next question -------------//
      document.querySelector(`#question_${id + 1}`).scrollIntoView({
        behavior: "smooth",
      });
    }
    if (id === test360Questions.length) {
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
          <h2>Evaluación nivel de experiencia y calidad del servicio 360°</h2>
          <h3>Evaluación de la madurez - {strategy}</h3>
          <div>
            <form onSubmit={handleSubmit} className={styles.form} ref={form}>
              {test360Questions.map((item) => {
                const { question, options, id, dimension } = item;
                return (
                  <Question
                    question={question}
                    options={options}
                    inputNumber={id}
                    handleChange={handleChange}
                    onSubmit={handleChange}
                    key={id}
                    dimension={dimension}
                  />
                );
              })}
              <button id="submit_btn" type="submit">
                Finalizar test
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
              maxValue={30}
              text={`${progress}/${test360Questions.length} respuestas`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "10px",
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
          {percent == 100 ? (
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
