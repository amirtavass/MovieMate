import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
function Modal({ onClose, onConfirm, movieTitle }) {
  console.log("Modal is rendering!");
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p>Are you sure you want to delete "{movieTitle}"?</p>
        <button onClick={onConfirm}>Yes, Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
