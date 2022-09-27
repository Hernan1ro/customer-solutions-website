import styles from "../styles/components/footer.module.css";

export const Footer = ({ report }) => {
  const classReport = {
    report: styles.report,
  };
  return (
    <footer className={`${styles.footer} ${classReport[report]}`}>
      <div className={styles.footer_container}>
        <div className={styles.box1}>
          <img src="./assets/icons/linkedin.svg" alt="linkedin-logo" />
          <h6>CUSTOMER SOLUTIONS</h6>
          <span>Calle 81 #71-29, Barranquilla, Atlántico, Colombia</span>
          <span>+57 3008586803</span>
        </div>
        <div className={styles.box2}>
          <p>
            Copyright © 2022 CUSTOMERS SOLUTIONS <br /> Todos los derechos
            reservados.
          </p>
          <p>experienciacliente@customerssolutions.co</p>
        </div>
      </div>
    </footer>
  );
};
