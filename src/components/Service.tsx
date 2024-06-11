import React from "react";
import styles from "../styles/Service.module.css";

type Props = {};

function Service({}: Props) {
  return (
    <section>
      <div className={styles.description}>
        <h1>Сервис</h1>
        <h4>От идеи до незабываемого и измеримого результата.</h4>
        <hr />
        <span>
          Интеграция безупречного производства, передовых технологий и тщательного измерения
          производительности
        </span>
      </div>
      <div className={styles.cards}>Cards</div>
    </section>
  );
}

export default Service;
