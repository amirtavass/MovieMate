import { Link } from "react-router-dom";
import { useWatchedMovies } from "../contexts/MoviesContext";
import styles from "./WatchedPage.module.css";
import WachedMoviesList from "../components/watched/WatchedMoviesList";
import WatchedSummary from "../components/watched/WatchedSummary";
function WatchedPage() {
  const { watched, removeFromWatched } = useWatchedMovies();

  return (
    <div className={styles.watchedContainer}>
      {watched.length == 0 ? (
        <div className={styles.emptyState}>
          <h2>No movies in your watched list yet🤔</h2>
          <p>Start exploring and rating movies to build your collection!</p>
          <Link className={styles.browseLink} to="/search">
            Browse Movies
          </Link>
        </div>
      ) : (
        <>
          <WatchedSummary watched={watched} />
          <WachedMoviesList
            watched={watched}
            removeFromWatched={removeFromWatched}
          />
        </>
      )}
    </div>
  );
}

export default WatchedPage;
