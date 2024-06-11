import { useState } from "react";
import styles from "@/styles/service/Card.module.css";
import type { CardDescription } from "@/types";

function Card({ title, text, img }: CardDescription) {
  return (
    <div className={styles.card}>
      <img src={`${img}.png`} alt="icon" />
      <h5>{title || "UNDEFINED"}</h5>

      <div className={styles.info}>
        <p>{text || "UNDEFINED"}</p>
        <button>ПОДРОБНЕЕ →</button>
      </div>
    </div>
  );
}

export default Card;
