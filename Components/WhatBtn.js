import Image from "next/image";
import styles from "../styles/components/whatbtn.module.css";

export const WhatsappBtn = () => {
  return (
    <a
      href="https://wa.link/cj1q3v"
      target="_blank"
      rel="noreferrer"
      className={styles.whatsappbtn}
    >
      <Image width={40} height={40} src="/assets/icons/whatsapp.svg" />
    </a>
  );
};
