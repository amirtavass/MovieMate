import { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { useMovies } from "../hooks/useMovies";
import MovieList from "../components/movie/MovieList";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import { useWatchedMovies } from "../contexts/MoviesContext";
import { IoSearchOutline } from "react-icons/io5";
function SearchResults() {
  const { query, setQuery } = useWatchedMovies();
  const [localQuery, setLocalQuery] = useState(query);
  const { movies, isLoading, error } = useMovies(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(localQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [localQuery, setQuery]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        <div className={styles.searchInputWrapper}>
          <IoSearchOutline className={styles.searchIcon} />
          <input
            placeholder="Search for movies"
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.resultContainer}>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && !query && (
          <div className={styles.welcomeMessage}>
            <p>
              Explore thousands of movies and add your favorites to your watched
              list
            </p>
          </div>
        )}
        {!isLoading && !error && movies?.length > 0 && (
          <>
            <p className={styles.resultsCount}>
              Found <strong>{movies.length}</strong> results for "{query}"
            </p>
            <MovieList movies={movies} />
          </>
        )}
        {!isLoading && !error && query && movies?.length === 0 && (
          <p className={styles.noResults}>No movies found for "{query}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
