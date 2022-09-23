import styles from "../styles/components/chartsx.module.css";

export const ChartSX = () => {
  return (
    <div className={styles.chart_container}>
      <img
        className={styles.chart}
        src="/assets/reports/chart.png"
        alt="chart"
      />
      <img className={styles.logo} src="/assets/reports/logo.png" alt="logo" />
    </div>
  );
};
