import Movie from "./Movie";
import styles from "./MovieList.module.css";

export interface MovieData {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

interface MovieListProps {
  movies: MovieData[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <ul className={`${styles.list} ${styles.listmovies}`}>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
