import styles from "../styles/pages/test.module.css";
import { QuestionInput } from "./QuestionInput";

export const QuestionTest = ({
  question,
  answers,
  inputNumber,
  handleChange,
}) => {
  return (
    <div className={styles.question}>
      <p className="question">{question}</p>
      <div className={styles.form_answer_container}>
        {answers.map((answer) => {
          const { answer } = answers;
          return (
            <QuestionInput
              answer={answer}
              inputNumber={inputNumber}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};
