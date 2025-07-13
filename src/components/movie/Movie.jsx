import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

function Movie({ movie }) {
  return (
    <li>
      <Link to={`/movie/${movie.imdbID}`} className={styles.movieLink}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
export default Movie;
