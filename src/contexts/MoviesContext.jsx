import { useContext, createContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const MoviesContext = createContext();
function MoviesProvider({ children }) {
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const [query, setQuery] = useState("");
  const [movieDetails, setMoviedetails] = useState({});

  function addToWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function removeFromWatched(movieId) {
    setWatched(watched.filter((movie) => movie.imdbID !== movieId));
  }

  return (
    <MoviesContext.Provider
      value={{
        watched,
        addToWatched,
        removeFromWatched,
        query,
        setQuery,
        movieDetails,
        setMoviedetails,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
function useWatchedMovies() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within MoviesProvider");
  }
  return context;
}
export { MoviesProvider, useWatchedMovies };
