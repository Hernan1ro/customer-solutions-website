import styles from "../styles/pages/test.module.css";
import { QuestionInput } from "./QuestionInput";

export const Question = ({ question, answers, inputNumber, handleChange }) => {
  return (
    <div className={styles.question} id={`question_${inputNumber}`}>
      <p className="question">{`${inputNumber}. ${question}`}</p>
      <div
        className={`${styles.form_answer_container} ${
          answers.length > 4 ? styles.grid : null
        }`}
      >
        {answers.map((option) => {
          return (
            <QuestionInput
              answer={option}
              inputNumber={inputNumber}
              handleChange={handleChange}
              key={option}
            />
          );
        })}
      </div>
    </div>
  );
};
