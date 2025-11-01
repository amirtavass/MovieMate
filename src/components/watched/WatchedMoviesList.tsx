import WatchedMovie from "./WatchedMovie";
import styles from "./WatchedMoviesList.module.css";
import { WatchedMovie as EachWatchedMovie } from "./WatchedSummary";

interface WatchedMoviesListProps {
  watched: EachWatchedMovie[];
  removeFromWatched: (id: string) => void;
}
function WatchedMoviesList({
  watched,
  removeFromWatched,
}: WatchedMoviesListProps) {
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
