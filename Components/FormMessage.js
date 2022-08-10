import styles from "../styles/components/form_message.module.css";

export const FormMessage = ({ text, type }) => {
  const messageType = {
    error: styles.error,
    success: styles.success,
  };
  return <span className={messageType[type]}>{text}</span>;
};
