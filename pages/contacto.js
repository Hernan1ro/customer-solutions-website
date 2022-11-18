import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/contacto.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormMessage } from "../Components/FormMessage";
import { PrivacityPolicies } from "../Components/PrivacityPolicies";
import { useRouter } from "next/router";

export default function Contacto() {
  const form = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const { locale } = useRouter();

  const contactText = {
    "en-US": {
      h1: "Contact Us",
      p: "We love to solve your concerns. Please let us know what you need",
      ph1: "Email",
      ph2: "Name",
      ph3: "Subject",
      ph4: "Leave us your message",
      btn: "Send",
      span: "By clicking on the send button you confirm that you accept our",
      em: "privacy and information processing policies",
      error: "All fields must be filled in",
      success:
        "Your message has been sent successfully, we will contact tigo soon",
    },
    "es-ES": {
      h1: "Comunícate con nosotros",
      p: "Nos encanta solucionar tus inquietudes. Por favor haznos saber que necesitas.",
      ph1: "Correo electrónico",
      ph2: "Nombre",
      ph3: "Asunto",
      ph4: "Déjanos tu mensaje",
      btn: "Enviar",
      span: "Al dar click en el botón enviar confirmas que aceptas nuestras",
      em: "políticas de privacidad y tratamiento de información",
      error: "Todos los campos deben ser diligenciados",
      success:
        "Tu mensaje ha sido enviado exitosamente, pronto nos pondremos en contacto con tigo",
    },
  };

  const {
    h1,
    p,
    ph1,
    ph2,
    ph3,
    ph4,
    btn,
    span,
    em,
    error: error_text,
    success: success_text,
  } = contactText[locale];

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
          "service_xwwrqej",
          "template_3w5zgm9",
          form.current,
          "5b5TcAMAZdpLU3I2W"
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
          <h1>{h1}</h1>
          <p>{p}</p>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <input type="email" name="email" required placeholder={ph1} />
            <input type="name" name="name" required placeholder={ph2} />
            <input type="text" name="subject" required placeholder={ph3} />
            <textarea
              name="Mensaje"
              type="text"
              cols="30"
              rows="3"
              placeholder={ph4}
            ></textarea>
            <button type="submit">{btn}</button>
          </form>
          {error ? <FormMessage type="error" text={error_text} /> : null}
          {success ? <FormMessage type="success" text={success_text} /> : null}
          <div className={styles.politics}>
            <span>{span}</span>
            <em onClick={handleClick}>{em}</em>
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
