import styles from "./WatchedMoviesList.module.css";

function WatchedMovie({ movie, onDeleteMovie }) {
  return (
    <li className={styles.watchedItem}>
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className={styles.poster}
      />

      <div className={styles.movieInfo}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div className={styles.ratings}>
          <div className={styles.rating}>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </div>
          <div className={styles.rating}>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </div>
          <div className={styles.rating}>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </div>
        </div>
      </div>

      <button
        className={styles.deleteButton}
        onClick={() => onDeleteMovie(movie.imdbID)}
        aria-label={`Remove ${movie.title} from watched list`}
      >
        ×
      </button>
    </li>
  );
}

export default WatchedMovie;
