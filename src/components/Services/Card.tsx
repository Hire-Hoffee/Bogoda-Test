import styles from "@/styles/service/Card.module.css";

import type { CardType } from "@/types";
import { useLazyGetPostQuery } from "@/api/fetchData";

function Card({ id, title, text, img }: CardType) {
  const [fetchData, { data, isLoading }] = useLazyGetPostQuery();

  return (
    <div className={styles.card}>
      <img src={`${img}.png`} alt="icon" />
      <h5>{title || "UNDEFINED"}</h5>

      {data && <p>{data.body}</p>}

      <div className={styles.info}>
        <p>{text || "UNDEFINED"}</p>
        <button onClick={() => fetchData(id)}>ПОДРОБНЕЕ →</button>
      </div>
    </div>
  );
}

export default Card;
