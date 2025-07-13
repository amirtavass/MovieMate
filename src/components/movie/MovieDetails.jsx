import { useEffect, useState } from "react";
import { useKey } from "../../hooks/useKey";
import { useNavigate } from "react-router-dom";
import StarRating from "../ui/StarRating";
import Loader from "../ui/Loader";
import styles from "./MovieDetails.module.css";

function MovieDetails({ selectedId, onAddWatched, watched }) {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const navigate = useNavigate();
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
    Writer: writer,
    Language: language,
    Country: country,
    Awards: awards,
    BoxOffice: boxOffice,
    imdbVotes: imdbVotes,
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
    navigate(-1); // Go back to previous page
  }

  function handleGoBack() {
    navigate(-1); // Go back to previous page
  }

  useKey("Escape", handleGoBack);

  useEffect(
    function () {
      async function getMoiveDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
        );

        const data = await res.json();
        console.log(data);
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
            <button className={styles.btnback} onClick={handleGoBack}>
              ← Back to search
            </button>
            <div className={styles.headerContent}>
              <div className={styles.posterWrapper}>
                <img src={poster} alt={`Poster of ${movie} movie`} />
              </div>

              <div className={styles.movieInfo}>
                <div className={styles.detailsoverview}>
                  <h2>{title}</h2>

                  <div className={styles.metaInfo}>
                    <span>📅 {year}</span>
                    <span>⏱️ {runtime}</span>
                    <span>🌍 {country}</span>
                    <span>🗣️ {language}</span>
                  </div>

                  <p className={styles.genre}>{genre}</p>

                  <div className={styles.imdbRating}>
                    <span>⭐</span>
                    <span>{imdbRating}/10 IMDb rating</span>
                  </div>
                </div>

                <div className={styles.rating}>
                  {!isWatched ? (
                    <>
                      <p className={styles.ratingTitle}>Rate this movie:</p>
                      <StarRating
                        maxRating={10}
                        size={28}
                        onSetRating={setUserRating}
                      />
                      {userRating > 0 && (
                        <button className={styles.btnadd} onClick={handleAdd}>
                          + Add to watched list
                        </button>
                      )}
                    </>
                  ) : (
                    <p className={styles.alreadyRated}>
                      ✓ You rated this movie {watchedUserRating}/10
                    </p>
                  )}
                </div>
              </div>
            </div>
          </header>

          <section>
            <div>
              <h3 className={styles.sectionTitle}>Plot</h3>
              <p className={styles.plot}>{plot}</p>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Cast & Crew</h3>
              <div className={styles.credits}>
                <div className={styles.creditItem}>
                  <p className={styles.creditLabel}>Director</p>
                  <p className={styles.creditValue}>{director}</p>
                </div>

                <div className={styles.creditItem}>
                  <p className={styles.creditLabel}>Writer</p>
                  <p className={styles.creditValue}>{writer}</p>
                </div>

                <div className={styles.creditItem}>
                  <p className={styles.creditLabel}>Stars</p>
                  <p className={styles.creditValue}>{actors}</p>
                </div>

                <div className={styles.creditItem}>
                  <p className={styles.creditLabel}>imdbVotes</p>
                  <p className={styles.creditValue}>{imdbVotes}</p>
                </div>
              </div>
            </div>

            {(awards !== "N/A" || boxOffice !== "N/A") && (
              <div>
                <h3 className={styles.sectionTitle}>Achievements</h3>
                <div className={styles.credits}>
                  {awards !== "N/A" && (
                    <div className={styles.creditItem}>
                      <p className={styles.creditLabel}>Awards</p>
                      <p className={styles.creditValue}>🏆 {awards}</p>
                    </div>
                  )}

                  {boxOffice !== "N/A" && (
                    <div className={styles.creditItem}>
                      <p className={styles.creditLabel}>Box Office</p>
                      <p className={styles.creditValue}>💰 {boxOffice}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
