import { useContext, createContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import toast from "react-hot-toast";

const MoviesContext = createContext();
function MoviesProvider({ children }) {
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const [query, setQuery] = useState("");
  const [movieDetails, setMoviedetails] = useState({});

  function addToWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    toast.success(`"${movie.title}" added to your watched list! 🎬`);
  }
  function removeFromWatched(movieId) {
    const movieToRemove = watched.find((movie) => movie.imdbID === movieId);

    if (!movieToRemove) toast.error("Movie not found in watched list!");
    else {
      setWatched(watched.filter((movie) => movie.imdbID !== movieId));
      toast.success(
        `"${movieToRemove.title}" removed from watched list successfully!`
      );
    }
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
