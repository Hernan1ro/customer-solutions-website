import styles from "../styles/pages/test.module.css";

export const QuestionInput = ({
  answer,
  inputNumber,
  handleChange,
  points,
}) => {
  return (
    <div className={styles.input}>
      <input
        type="radio"
        name={`input${inputNumber}`}
        value={answer}
        onChange={() => handleChange(inputNumber)}
        datatype={points}
      />
      <label htmlFor="input1">{answer}</label>
    </div>
  );
};
