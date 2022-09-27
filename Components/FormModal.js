import { useState } from "react";
import styles from "../styles/containers/formmodal.module.css";

export const FormModal = ({
  handleClick,
  handleDownload: download,
  setShow,
  setShowReport,
  show,
}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
  });
  const handleDownload = (e) => {
    e.preventDefault();
    document.body.style.overflow = "auto";
    download(user);
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onClose = () => {
    setShow(!show);
    setShowReport(false);
    document.body.style.overflow = "auto";
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
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            onChange={handleInput}
          />
          <input
            type="country"
            name="country"
            placeholder="País"
            required
            onChange={handleInput}
          />
          <input
            type="city"
            name="city"
            placeholder="Ciudad"
            required
            onChange={handleInput}
          />
          <button type="submit">Descargar informe</button>
        </form>
        <em>
          Al descargar el informe aceptas nuestras{" "}
          <strong onClick={handleClick}>
            políticas de privacidad y tratamiento de datos
          </strong>
        </em>
        <img
          className={styles.close_btn}
          src="/assets/icons/close.svg"
          alt="close"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
