import Image from "next/image";
import styles from "../styles/components/whatbtn.module.css";

export const WhatsappBtn = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=13658803809"
      target="_blank"
      rel="noreferrer"
      className={styles.whatsappbtn}
    >
      <Image
        width={40}
        height={40}
        src="/assets/icons/whatsapp.svg"
        alt="whatsapp"
      />
    </a>
  );
};
