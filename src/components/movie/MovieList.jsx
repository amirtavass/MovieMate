import Movie from "./Movie";
import styles from "./MovieList.module.css";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className={`${styles.list} ${styles.listmovies}`}>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
