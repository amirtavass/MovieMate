import { useEffect, useState } from "react";
import { useKey } from "../../hooks/useKey";
import StarRating from "../../StarRating";
import Loader from "../ui/Loader";
import styles from "./MovieDetails.module.css";

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  useKey("Escape", onCloseMovie);

  useEffect(
    function () {
      async function getMoiveDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
        );

        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMoiveDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "MovieMate";
      };
    },
    [title]
  );
  return (
    <div className={styles.details}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className={styles.btnback} onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className={styles.detailsoverview}>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          {/* <p>{avgRating}</p> */}

          <section>
            <div className={styles.rating}>
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className={styles.btnadd} onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You have already rated this movie {watchedUserRating}</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
export default MovieDetails;
