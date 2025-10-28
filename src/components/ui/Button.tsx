import styles from "./Button.module.css";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type: string;
}
function Button({ children, onClick, type }: ButtonProps): React.JSX.Element {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
