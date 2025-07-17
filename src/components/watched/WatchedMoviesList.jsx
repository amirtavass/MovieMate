import WatchedMovie from "./WatchedMovie";
import styles from "./WatchedMoviesList.module.css";

function WatchedMoviesList({ watched, removeFromWatched }) {
  return (
    <ul className={styles.watchedList}>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteMovie={removeFromWatched}
        />
      ))}
    </ul>
  );
}
export default WatchedMoviesList;
