import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function useMovies(query) {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("something went wrong when fetching movies");
          const data = await res.json();
          if (data.Response === "False") {
            toast.error("No movies found. Try a different search term!");
            setMovies([]);
            setError("Movie not found");
            return;
          }
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            toast.error("Failed to search movies. Please try again.");
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 4) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
