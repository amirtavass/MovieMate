import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <p>Loading</p>
      <div className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}
export default Loader;
