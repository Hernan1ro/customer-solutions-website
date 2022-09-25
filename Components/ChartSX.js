import styles from "../styles/components/chartsx.module.css";

export const ChartSX = ({ hardDimension, softDimension }) => {
  let xcoords = (softDimension / 180) * 100;
  let ycoords = (hardDimension / 120) * 100;

  return (
    <div className={styles.chart_container}>
      <img
        className={styles.chart}
        src="/assets/reports/chart.png"
        alt="chart"
        id="chart"
      />
      <img
        className={styles.logo}
        style={{
          left: `calc(${xcoords}% - 2.25rem)`,
          bottom: `calc(${ycoords}% - 2.3875rem)`,
        }}
        src="/assets/reports/logo.png"
        alt="logo"
      />
    </div>
  );
};
