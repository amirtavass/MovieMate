import Movie from "./Movie";
import styles from "./MovieList.module.css";

function MovieList({ movies }) {
  return (
    <ul className={`${styles.list} ${styles.listmovies}`}>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
