import styles from "@/styles/service/Card.module.css";

import { createPortal } from "react-dom";
import type { CardType } from "@/types";
import Modal from "./Modal";
import { useLazyGetPostQuery } from "@/api/fetchData";
import { useState } from "react";

function Card({ id, title, text, img }: CardType) {
  const [fetchData, { data }] = useLazyGetPostQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    fetchData(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card}>
      <img src={`${img}.png`} alt="icon" />
      <h5>{title || "UNDEFINED"}</h5>

      {data &&
        isModalOpen &&
        createPortal(
          <Modal id={data.id} body={data.body} title={data.title} onClose={handleCloseModal} />,
          document.body
        )}

      <div className={styles.info}>
        <p>{text || "UNDEFINED"}</p>
        <button onClick={handleButtonClick}>ПОДРОБНЕЕ →</button>
      </div>
    </div>
  );
}

export default Card;
