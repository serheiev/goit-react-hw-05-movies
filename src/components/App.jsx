import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';

const LazyHomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LazySearchPage = lazy(() => import('../Pages/SearchPage/SearchPage'));
const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const LazyMovieCast = lazy(() => import('./MovieCast/MovieCast'));
const LazyMovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/movies" element={<LazySearchPage />} />
          <Route path="/movies/:movieId" element={<LazyMovieDetails />}>
            <Route path="cast" element={<LazyMovieCast />} />
            <Route path="reviews" element={<LazyMovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
