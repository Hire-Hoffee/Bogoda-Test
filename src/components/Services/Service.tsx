import styles from "@/styles/service/Service.module.css";

import Card from "./Card";
import { cardsData } from "@/utils/data";
import type { CardType } from "@/types";

function Service() {
  return (
    <section>
      <div className={styles.description}>
        <h1>Сервис</h1>
        <h4>От идеи до незабываемого и измеримого результата.</h4>
        <hr />
        <p>
          Интеграция безупречного производства, передовых технологий и тщательного измерения
          производительности
        </p>
      </div>
      <div className={styles.cards}>
        {cardsData.map((item: CardType) => {
          return (
            <Card key={item.id} id={item.id} title={item.title} text={item.text} img={item.img} />
          );
        })}
      </div>
    </section>
  );
}

export default Service;
