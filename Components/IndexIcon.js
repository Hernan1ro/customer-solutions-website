export const IndexIcon = ({ name, color, width = 50, height = 50 }) => {
  if (name === "Estrategia") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 44 44"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.75"
          d="M23.64 16.5h-3.28a2.026 2.026 0 0 0-2.026 2.026v17.948c0 1.119.907 2.026 2.026 2.026h3.281a2.026 2.026 0 0 0 2.026-2.026V18.526A2.026 2.026 0 0 0 23.64 16.5Zm12.834-11h-3.281a2.026 2.026 0 0 0-2.026 2.026v28.948c0 1.119.907 2.026 2.026 2.026h3.282a2.026 2.026 0 0 0 2.025-2.026V7.526A2.026 2.026 0 0 0 36.474 5.5Zm-27.307 33a3.667 3.667 0 1 0 0-7.333 3.667 3.667 0 0 0 0 7.333Z"
        />
      </svg>
    );
  }
  if (name === "Procesos") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 44 44"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.75"
          d="m16.5 22 3.667 3.667 7.333-7.334"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.75"
          d="M22 5.5A22 22 0 0 0 37.583 11 22 22 0 0 1 22 38.5 22 22 0 0 1 6.417 11 22 22 0 0 0 22 5.5"
        />
      </svg>
    );
  }
  if (name === "Empleados") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 59 59"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.75"
          d="M29.5 51.625c12.22 0 22.125-9.906 22.125-22.125 0-12.22-9.906-22.125-22.125-22.125-12.22 0-22.125 9.906-22.125 22.125 0 12.22 9.906 22.125 22.125 22.125Z"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.75"
          d="M29.5 31.958a7.375 7.375 0 1 0 0-14.75 7.375 7.375 0 0 0 0 14.75ZM15.163 46.337a9.833 9.833 0 0 1 9.42-7.004h9.834a9.834 9.834 0 0 1 9.425 7.019"
        />
      </svg>
    );
  }
  if (name === "Clientes") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 44 44"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.75"
          d="M16.5 20.167a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667ZM5.5 38.5v-3.667a7.333 7.333 0 0 1 7.333-7.333h7.334a7.333 7.333 0 0 1 7.333 7.333V38.5m1.833-32.762a7.333 7.333 0 0 1 0 14.209M38.5 38.5v-3.667a7.333 7.333 0 0 0-5.5-7.058"
        />
      </svg>
    );
  }
};
