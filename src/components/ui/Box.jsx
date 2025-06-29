import { useState } from "react";
import styles from "./Box.module.css";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.box}>
      <button
        className={styles.btntoggle}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
export default Box;
