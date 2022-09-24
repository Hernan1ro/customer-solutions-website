import { useEffect } from "react";
import styles from "../styles/components/chartsx.module.css";
import { useSelector } from "react-redux";

export const ChartSX = () => {
  const {
    points: { strategy, process: process_, people, customers },
  } = useSelector((state) => state.index360Slice);

  const indicatorsArr = [strategy, process_, people, customers];

  // ------------- calculatr points ------------- //

  let softDimension;
  let hardDimension;

  softDimension = indicatorsArr[2] + indicatorsArr[3];
  hardDimension = indicatorsArr[0] + indicatorsArr[1];

  console.table(
    "hard dimension",
    hardDimension,
    "softdimension",
    softDimension
  );

  // let yaxis;
  // let xaxis;

  // useEffect(() => {
  //   yaxis = document.getElementById("chart").height;
  //   xaxis = document.getElementById("chart").width;
  //   console.log(yaxis, xaxis);
  // }, []);

  let xcoords = (softDimension / 180) * 100;
  let ycoords = (hardDimension / 120) * 100;

  // console.log(xcoords, ycoords);

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
