import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import MovieDetails from "../components/movie/MovieDetails";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { id } = useParams();
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  return (
    <div className={styles.detailsContainer}>
      <MovieDetails
        selectedId={id}
        onAddWatched={handleAddWatched}
        watched={watched}
      />
    </div>
  );
}

export default MovieDetailsPage;
