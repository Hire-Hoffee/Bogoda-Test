import styles from "@/styles/service/Modal.module.css";

type Props = {
  id: number;
  body: string;
  title: string;
  onClose: () => void;
};

function Modal({ id, body, title, onClose }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button onClick={onClose}>X</button>
        <h3>id - {id}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Modal;
