import styles from "../styles/containers/report.module.css";

export const Report = () => {
  return (
    <div className={styles.text_sample} id="text-sample">
      <h2>Hola Papu</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
        delectus repellendus enim aspernatur exercitationem, dicta, vitae
        aliquid officiis obcaecati vel qui dolor fugiat maxime quos alias
        commodi non a quia cum! Quis et ex, minus corrupti, error obcaecati ea
        explicabo reprehenderit beatae accusamus numquam fugit est fuga
        blanditiis, praesentium cumque!
      </p>
      <img src="/assets/reports/strategy.jpg" alt="estrategia" />
    </div>
  );
};
