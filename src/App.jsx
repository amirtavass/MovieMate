import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import AppLayout from "./Layout/AppLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import WatchedPage from "./pages/WatchedPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
// import ErrorMessage from "./components/ui/ErrorMessage";
// import Loader from "./components/ui/Loader";
// import Box from "./components/ui/Box";
// import Main from "./components/ui/Main";
// import Search from "./components/ui/Search";
// import NumResults from "./components/ui/NumResults";
// import NavBar from "./Layout/NavBar";
// import MovieList from "./components/movie/MovieList";
// import WatchedSummary from "./components/watched/WatchedSummary";
// import WatchedMoviesList from "./components/watched/WatchedMoviesList";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched",JSON.stringify([...watched,movie]))
  }
  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watched" element={<WatchedPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
    // <div className={styles.container}>
    //   <NavBar>
    //     <Search query={query} setQuery={setQuery} />
    //     <NumResults movies={movies} />
    //   </NavBar>
    //   <Main>
    //     <Box>
    //       {!isLoading && !error && (
    //         <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
    //       )}
    //       {isLoading && <Loader />}
    //       {error && <ErrorMessage message={error} />}
    //     </Box>
    //     <Box>
    //       {selectedId ? (
    //         <MovieDetails
    //           selectedId={selectedId}
    //           onCloseMovie={handleCloseMovie}
    //           onAddWatched={handleAddWatched}
    //           watched={watched}
    //         />
    //       ) : (
    //         <>
    //           <WatchedSummary watched={watched} />
    //           <WatchedMoviesList
    //             watched={watched}
    //             onDeleteMovie={handleDeleteMovie}
    //           />
    //         </>
    //       )}
    //     </Box>
    //   </Main>
    // </div>
  );
}
