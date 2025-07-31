import AppLayout from "./Layout/AppLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import WatchedPage from "./pages/WatchedPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { MoviesProvider } from "./contexts/MoviesContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Toaster
          position="top-center"
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 2000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var( --color-text-dark)",
              color: "var(--color-background-500)",
            },
          }}
        />
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
