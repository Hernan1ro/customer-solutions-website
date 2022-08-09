import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/contacto.module.css";

export default function Contacto() {
  return (
    <Layout page="Inicio">
      <section className={styles.form_section}>
        <div>
          <h1>Comunicáte con nosotros</h1>
          <p>
            Nos encanta solucionar tus inquietudes. Por favor haznos saber que
            necesitas.
          </p>
          <form className={styles.form}>
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
