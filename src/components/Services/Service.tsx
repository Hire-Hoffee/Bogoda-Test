import React from "react";
import styles from "@/styles/service/Service.module.css";

import Card from "./Card";
import { cardsData } from "@/utils/data";
import type { CardDescription } from "@/types";

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
      <div className={styles.cards}>
        {cardsData.map((item: CardDescription) => {
          return <Card key={item.title} title={item.title} text={item.text} img={item.img} />;
        })}
      </div>
    </section>
  );
}

export default Service;
