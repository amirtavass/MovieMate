import { useContext, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const MoviesContext = createContext();
function MoviesProvider({ children }) {
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function addToWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function removeFromWatched(movieId) {
    setWatched((watched) =>
      watched.filter((movie) => movie.imdbID == !movieId)
    );
  }

  return (
    <MoviesContext.Provider
      value={{ watched, addToWatched, removeFromWatched }}
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
