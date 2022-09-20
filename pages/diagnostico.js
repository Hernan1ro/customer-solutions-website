import { useState } from "react";
import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/diagnostico.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CategoryIndex } from "../Components/CategoryIndex";
import { useSelector } from "react-redux";
import { diagnostic } from "../pages/api/diagnostic";
import { FormModal } from "../Components/FormModal";
import { PrivacityPolicies } from "../Components/PrivacityPolicies";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Diagnostico(props) {
  const [show, setShow] = useState(false);
  const [policies, setPolicies] = useState(false);
  const {
    result: { index, strategy, process: process_, people, customers },
    profile: [job, employee_number, experience, position, sector],
  } = useSelector((state) => state.index360Slice);

  const indicators = diagnostic(index, strategy, process_, people, customers);

  // --------------data for the main index-------------------//
  const { category, conclusion, heading, value, lse, lie } = indicators[0];

  const textHandler = (value, text, lie, lse) => {
    if (value < lie) {
      return text.low;
    } else if (value >= lie && value < lse) {
      return text.middle;
    } else if (value >= lse) {
      return text.high;
    }
  };
  const colorHandler = (points, lie, lse) => {
    if (points < lie) {
      return "#f57070";
    } else if (points >= lie && points < lse) {
      return "#3aa8f7";
    } else if (points >= lse) {
      return "#e57716";
    }
  };

  const color = colorHandler(value, lie, lse);
  const summary = textHandler(value, heading, lie, lse);
  const text = textHandler(value, conclusion, lie, lse);

  //-------------styles ---------------//
  const hoverClass = (hex) => {
    switch (hex) {
      case "#f57070":
        return styles.redhover;
      case "#3aa8f7":
        return styles.bluehover;
      case "#e57716":
        return styles.orangehover;
    }
  };

  const handleDownload = async (user) => {
    handleExport();
    const data = {
      index,
      strategy,
      process: process_,
      people,
      customers,
      job: job.answer,
      employee_number: employee_number.answer,
      experience: experience.answer,
      position: position.answer,
      sector: sector.answer,
      ...user,
    };

    // sendData(data);
  };

  const handleClick = () => {
    setPolicies(!policies);
  };

  //--------------sending data to the API ---------------//
  async function sendData(data) {
    const URL = process.env.NEXT_PUBLIC_DB + "/api/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(URL, options);
      const data_res = await res.json();
      console.log(data_res);
      setShow(!show);
    } catch (err) {
      console.log(err);
    }
  }

  function handleExport(data) {
    let doc = new jsPDF("l", "pt", "letter");
    let margin = 10;
    let scale =
      (doc.internal.pageSize.width - margin * 2) / document.body.scrollWidth;
    let target = document.querySelector("#text-sample");
    // let target = document.body;

    doc.html(target, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale,
      },
      callback: function (doc) {
        // doc.save("Evaluación360.pdf"); // ----------- download inmedialy------//
        doc.output("dataurlnewwindow", {
          filename: "Evaluación_360-Customer_solutions.pdf",
        });
        doc.save("Evaluación_360-Customer_solutions.pdf");
      },
    });
  }

  return (
    <Layout page="Diagnóstico 360°">
      <section className={`${styles.diagnostic}`} id="diagnostic">
        <h2>Diagnóstico madurez experiencia de servicio</h2>
        <h3>Estos son tus resultados</h3>
        <div className={`${styles.index_container} `}>
          <h4>{category}</h4>
          <div className={styles.main_index}>
            <div className={styles.index_bar}>
              <div className={styles.progressbar}>
                <CircularProgressbar
                  value={index}
                  text={`${index}%`}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: "butt",
                    textSize: "20px",
                    fontWeight: "bold",
                    pathTransitionDuration: 0.5,
                    pathColor: color,
                    textColor: color,
                    trailColor: "#daedfc",
                    backgroundColor: color,
                  })}
                />
              </div>
              <span style={{ color }}>{summary}</span>
            </div>
            <div className={styles.index_description}>
              <img src="./assets/Illustrations/results.svg" alt="Index image" />
              <p>{text}</p>
              <button onClick={() => setShow(!show)}>
                Descarga tu informe completo
                <img
                  src="./assets/icons/download.svg"
                  alt="download complete inform"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.indexes_container}>
          {indicators.map((obj, index) => {
            const { category, conclusion, heading, value, lse, lie } = obj;
            if (index > 0 && value > 0) {
              return (
                <CategoryIndex
                  value={value}
                  category={category}
                  conclusion={conclusion}
                  heading={heading}
                  key={category}
                  textHandler={textHandler}
                  colorHandler={colorHandler}
                  lse={lse}
                  lie={lie}
                  hoverClass={hoverClass}
                />
              );
            }
          })}
        </div>
        <div className={styles.text_sample} id="text-sample">
          <h2>Hola Papu</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            delectus repellendus enim aspernatur exercitationem, dicta, vitae
            aliquid officiis obcaecati vel qui dolor fugiat maxime quos alias
            commodi non a quia cum! Quis et ex, minus corrupti, error obcaecati
            ea explicabo reprehenderit beatae accusamus numquam fugit est fuga
            blanditiis, praesentium cumque!
          </p>
        </div>
      </section>
      {show ? (
        <FormModal handleClick={handleClick} handleDownload={handleDownload} />
      ) : null}
      {policies ? <PrivacityPolicies handleClick={handleClick} /> : null}
    </Layout>
  );
}
