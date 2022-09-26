import styles from "../styles/components/index_report.module.css";

export const IndexReport = ({
  category,
  value,
  conclusion,
  orientation,
  imgUrl,
  lie,
  lse,
  colorHandler,
  textHandler,
}) => {
  const style = {
    left: styles.left,
  };

  const color = colorHandler(value, lie, lse);
  const text = textHandler(value, conclusion, lie, lse);

  return (
    <div className={styles.index}>
      <img className={style[orientation]} src={imgUrl} alt={category} />
      <div className={styles.index_description}>
        <h3 style={{ color }}>{category}</h3>
        <div
          style={{ backgroundColor: color, boxShadow: `5px 5px 30px ${color}` }}
          className={styles.percentaje_result_index}
        >{`${value}%`}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};
