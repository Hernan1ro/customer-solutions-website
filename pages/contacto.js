import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/contacto.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormMessage } from "../Components/FormMessage";

export default function Contacto() {
  const form = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const value = [
      form.current[0].value,
      form.current[1].value,
      form.current[2].value,
      form.current[3].value,
    ];
    if (value.includes("")) {
      console.log("form vació");
      setError(true);
      setTimeout(() => setError(false), 3000);
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
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <Layout page="Inicio">
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
            <FormMessage text="Todos los campos deben ser diligenciados" />
          ) : null}
          <em>Política de privacidad</em>
        </div>
        <div>
          <img
            width={700}
            height={420}
            src="/assets/imagenes/banner.webp"
            alt="headquarters image"
          />
        </div>
      </section>
    </Layout>
  );
}
