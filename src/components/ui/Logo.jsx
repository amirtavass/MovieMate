import styles from "./Logo.module.css";
import { MdLocalMovies } from "react-icons/md";
function Logo() {
  return (
    <div className={styles.logo}>
      <MdLocalMovies style={{ color: "#ccc", fontSize: "3.2rem" }} />

      <h1>MovieMate</h1>
    </div>
  );
}
export default Logo;
