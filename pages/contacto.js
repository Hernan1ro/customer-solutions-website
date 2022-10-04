import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/contacto.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormMessage } from "../Components/FormMessage";
import { PrivacityPolicies } from "../Components/PrivacityPolicies";

export default function Contacto() {
  const form = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const value = [
      form.current[0].value,
      form.current[1].value,
      form.current[2].value,
      form.current[3].value,
    ];

    if (value.includes("")) {
      setError(true);
    } else {
      setSuccess(true);
      emailjs
        .sendForm(
          "service_xatg6gi",
          "template_4x3byze",
          form.current,
          "STkwfQTM519ZxYxFL"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  const handleClick = (e) => {
    setShowPolicies(!showPolicies);
  };

  return (
    <Layout page="Contácto">
      <section className={styles.form_section}>
        <div>
          <h1>Comunicáte con nosotros</h1>
          <p>
            Nos encanta solucionar tus inquietudes. Por favor haznos saber que
            necesitas.
          </p>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
            />
            <input type="name" name="name" required placeholder="Nombre" />
            <input type="text" name="subject" required placeholder="Asunto" />
            <textarea
              name="Mensaje"
              type="text"
              cols="30"
              rows="3"
              placeholder="Déjanos tu mensaje"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
          {error ? (
            <FormMessage
              type="error"
              text="Todos los campos deben ser diligenciados"
            />
          ) : null}
          {success ? (
            <FormMessage
              type="success"
              text="Tu mensaje ha sido enviado exitosamente, pronto nos pondremos en contacto con tigo"
            />
          ) : null}
          <div className={styles.politics}>
            <span>
              Al dar click en el botón <strong>enviar</strong> confirmas que
              aceptas nuestras
            </span>
            <em onClick={handleClick}>
              políticas de privacidad y tratamiento de información
            </em>
          </div>
        </div>
        <div>
          <img
            width={700}
            height={420}
            src="/assets/imagenes/banner.webp"
            alt="headquarters image"
          />
        </div>
        {showPolicies ? <PrivacityPolicies handleClick={handleClick} /> : null}
      </section>
    </Layout>
  );
}
