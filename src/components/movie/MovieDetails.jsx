import { useEffect, useState } from "react";
import { useKey } from "../../hooks/useKey";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../ui/StarRating";
import Loader from "../ui/Loader";
import styles from "./MovieDetails.module.css";
import Button from "../ui/Button";
import { useWatchedMovies } from "../../contexts/MoviesContext";
import {
  IoArrowBackOutline,
  IoCalendarOutline,
  IoChatbubbleOutline,
  IoGlobeOutline,
  IoTimeOutline,
} from "react-icons/io5";

function MovieDetails() {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const navigate = useNavigate();
  const { id } = useParams();
  const { movieDetails, setMoviedetails, addToWatched, watched } =
    useWatchedMovies();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(id);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === id
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
      imdbID: id,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    addToWatched(newWatchedMovie);
    navigate(-1); // Go back to previous page
  }

  function handleGoBack() {
    navigate(-1); // Go back to previous page
  }

  useKey("Escape", handleGoBack);

  useEffect(
    function () {
      if (movieDetails[id]) {
        setMovie(movieDetails[id]);
        setIsLoading(false);
        return;
      }
      async function getMoiveDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );

        const data = await res.json();
        setMovie(data);
        setMoviedetails((prev) => ({ ...prev, [id]: data }));
        setIsLoading(false);
      }
      getMoiveDetails();
    },
    [id]
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
            <Button onClick={handleGoBack} type="back">
              <IoArrowBackOutline /> Back to search
            </Button>
            <div className={styles.headerContent}>
              <div className={styles.posterWrapper}>
                <img src={poster} alt={`Poster of ${movie} movie`} />
              </div>

              <div className={styles.movieInfo}>
                <div className={styles.detailsoverview}>
                  <h2>{title}</h2>

                  <div className={styles.metaInfo}>
                    <span>
                      <IoCalendarOutline /> {year}
                    </span>
                    <span>
                      <IoTimeOutline /> {runtime}
                    </span>
                    <span>
                      <IoGlobeOutline /> {country}
                    </span>
                    <span>
                      <IoChatbubbleOutline /> {language}
                    </span>
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
                        <Button type="add" onClick={handleAdd}>
                          + Add to watched list
                        </Button>
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
