import WatchedMovie from "./WatchedMovie";
import styles from "../movie/MovieList.module.css";

function WatchedMoviesList({ watched, onDeleteMovie }) {
  return (
    <ul className={styles.list}>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}
export default WatchedMoviesList;
