import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart({ indicators }) {
  const values = indicators.map((obj) => obj.value);

  const data = {
    labels: ["Estrategia", "Procesos", "Personas", "Clientes"],
    datasets: [
      {
        label: "Balance 360",
        data: values.shift(),
        backgroundColor: "rgba(238, 143, 60, 0.3)",
        borderColor: "#ee8f3c",
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} />;
}
