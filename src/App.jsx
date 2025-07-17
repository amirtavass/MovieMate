import AppLayout from "./Layout/AppLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import WatchedPage from "./pages/WatchedPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { MoviesProvider } from "./contexts/MoviesContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <MoviesProvider>
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
    </MoviesProvider>
  );
}
