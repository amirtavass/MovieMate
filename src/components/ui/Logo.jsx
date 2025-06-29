import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <span role="img">🍿</span>
      <h1>MovieMate</h1>
    </div>
  );
}
export default Logo;
