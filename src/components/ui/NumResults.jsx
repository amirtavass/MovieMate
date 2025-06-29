import styles from "./NumResults.module.css";
function NumResults({ movies }) {
  return (
    <p className={styles.numresults}>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
export default NumResults;
