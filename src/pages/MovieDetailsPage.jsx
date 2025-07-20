import MovieDetails from "../components/movie/MovieDetails";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  return (
    <div className={styles.detailsContainer}>
      <MovieDetails />
    </div>
  );
}

export default MovieDetailsPage;
