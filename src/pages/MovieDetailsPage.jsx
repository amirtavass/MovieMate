import { useParams } from "react-router-dom";
import MovieDetails from "../components/movie/MovieDetails";
import styles from "./MovieDetailsPage.module.css";
import { useWatchedMovies } from "../contexts/MoviesContext";

function MovieDetailsPage() {
  const { id } = useParams();
  const { watched, addToWatched } = useWatchedMovies();

  return (
    <div className={styles.detailsContainer}>
      <MovieDetails
        selectedId={id}
        onAddWatched={addToWatched}
        watched={watched}
      />
    </div>
  );
}

export default MovieDetailsPage;
