import styles from "../styles/pages/test.module.css";
import { QuestionInput } from "./QuestionInput";

export const Question = ({
  question,
  options,
  inputNumber,
  handleChange,
  dimension,
}) => {
  return (
    <div className={styles.question} id={`question_${inputNumber}`}>
      <div className={styles.question_text}>
        <p>{inputNumber}.</p>
        <p id="question_text" className="question" datatype={dimension}>
          {question}
        </p>
      </div>
      <div
        className={`${styles.form_answer_container} ${
          options.length > 4 ? styles.grid : null
        }`}
      >
        {options.map((option) => {
          const { points, answer } = option;
          return (
            <QuestionInput
              answer={answer}
              points={points}
              inputNumber={inputNumber}
              handleChange={handleChange}
              key={option.answer}
            />
          );
        })}
      </div>
    </div>
  );
};
