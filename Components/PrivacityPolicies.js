import styles from "../styles/components/privacitypolicies.module.css";
import { useRouter } from "next/router";
import { policyText } from "../pages/api/policies";
export const PrivacityPolicies = ({ handleClick }) => {
  const { locale } = useRouter();

  const {
    h3,
    p1,
    p2,
    email,
    p3,
    web,
    p4,
    h4,
    p5,
    li1,
    li2,
    li3,
    li4,
    li5,
    li6,
    li7,
    li8,
    h42,
    p6,
    li9,
    li10,
    li11,
    li12,
    li13,
    li14,
    h43,
    p7,
    h44,
    p8,
    p9,
    p10,
    p11,
    p12,
    h45,
    p13,
    p14,
    btn,
  } = policyText[locale];

  return (
    <div className={styles.privacity_politics}>
      <article>
        <div>
          <h3>{h3}</h3>
          <p>{p1}</p>
          <p>
            {p2}
            <u>{email}</u>
            {p3}
            <u>{web}</u>
            {p4}
          </p>
          <h4>{h4}</h4>
          <p>{p5}</p>
          <ul>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
            <li>{li5}</li>
            <li>{li6}</li>
            <li>{li7}</li>
            <li>{li8}</li>
          </ul>
          <h4>{h42}</h4>
          <p>{p6}</p>
          <ul>
            <li>{li9}</li>
            <li>{li10}</li>
            <li>{li11}</li>
            <li>{li12}</li>
            <li>{li13}</li>
            <li>{li14}</li>
          </ul>
          <h4>{h43}</h4>
          <p>{p7}</p>
          <h4>{h44}</h4>
          <p>
            {p8}
            <u>{email}</u>
            {p9}
          </p>
          <p>{p10}</p>
          <p>{p11}</p>
          <p>{p12}</p>
          <h4>{h45}</h4>
          <p>{p13}</p>
          <p>{p14}</p>
          <button onClick={handleClick}>{btn}</button>
        </div>
      </article>
    </div>
  );
};
