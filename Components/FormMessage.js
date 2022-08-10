import styles from "../styles/components/form_message.module.css";

export const FormMessage = ({ text }) => {
  return <span className={styles.message}>{text}</span>;
};
