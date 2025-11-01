import { useState } from "react";
import styles from "./WatchedMoviesList.module.css";
import Modal from "../ui/Modal";
import { WatchedMovie as EachWatchedMovie } from "./WatchedSummary";

interface WatchedMovieProps {
  movie: EachWatchedMovie;
  onDeleteMovie: (id: string) => void;
}

function WatchedMovie({ movie, onDeleteMovie }: WatchedMovieProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleDelete = () => {
    onDeleteMovie(movie.imdbID);
    setShowModal(false);
  };

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
        // onClick={() => onDeleteMovie(movie.imdbID)}
        // aria-label={`Remove ${movie.title} from watched list`}
        onClick={() => setShowModal(true)}
      >
        ×
      </button>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
          movieTitle={movie.title}
        />
      )}
    </li>
  );
}

export default WatchedMovie;
