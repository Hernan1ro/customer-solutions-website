import styles from "../styles/containers/formmodal.module.css";

export const FormModal = ({ handleClick, handleDownload: download }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    // Default export is a4 paper, portrait, using millimeters for units
    // const doc = new jsPDF();
    // doc.circle(10, 12, 12);
    // console.log(doc);
    // doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");
    // Load a new blank workbook
    console.log("Descargando...");
    download();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.form_container}>
        <img
          src="./assets/icons/customer_logo.svg"
          alt="customer solutions"
          width="50px"
          height="50px"
        />
        <h3>Descarga tu autoevaluacion 360°</h3>
        <p>
          Completa el formulario para tener acceso al informe completo en pdf
        </p>
        <form onSubmit={handleDownload}>
          <input
            type="name"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <input type="country" name="country" placeholder="País" required />
          <input type="city" name="city" placeholder="Ciudad" required />
          <button type="submit">Descargar informe</button>
        </form>
        <em>
          Al descargar el informe aceptas nuestras{" "}
          <strong onClick={handleClick}>
            políticas de privacidad y tratamiento de datos
          </strong>
        </em>
      </div>
    </div>
  );
};
