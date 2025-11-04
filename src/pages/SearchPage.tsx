import { useEffect, useState, ReactNode } from "react";
import styles from "./SearchPage.module.css";
// @ts-ignore
import { useMovies } from "../hooks/useMovies";
import MovieList from "../components/movie/MovieList";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
// @ts-ignore
import { useWatchedMovies } from "../contexts/MoviesContext";
import { IoSearchOutline } from "react-icons/io5";

function SearchResults() {
  const { query, setQuery } = useWatchedMovies();
  const [localQuery, setLocalQuery] = useState<string>(query);
  const { movies, isLoading, error } = useMovies(query);

  let content: ReactNode;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <ErrorMessage message={error} />;
  } else if (!query) {
    content = (
      <div className={styles.welcomeMessage}>
        <p>
          Explore thousands of movies and add your favorites to your watched
          list
        </p>
      </div>
    );
  } else if (movies?.length === 0) {
    content = <p className={styles.noResults}>No movies found for "{query}"</p>;
  } else if (movies && movies.length > 0) {
    content = (
      <>
        <p className={styles.resultsCount}>
          Found <strong>{movies.length}</strong> results for "{query}"
        </p>
        <MovieList movies={movies} />
      </>
    );
  }

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
      <div className={styles.resultContainer}>{content}</div>
    </div>
  );
}

export default SearchResults;
