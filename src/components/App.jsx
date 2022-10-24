import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './Header/Header';
// import { HomePage } from '../Pages/HomePage/HomePage';
// import { SearchPage } from 'Pages/SearchPage/SearchPage';
// import { MovieDetails } from './MovieDetails/MovieDetails';
// import { MovieCast } from './MovieCast/MovieCast';
// import { MovieReviews } from './MovieReviews/MovieReviews';
import { Loader } from './Loader/Loader';

const LazyHomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LazySearchPage = lazy(() => import('../Pages/SearchPage/SearchPage'));
const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const LazyMovieCast = lazy(() => import('./MovieCast/MovieCast'));
const LazyMovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      {/* <Route path="/" element={<LazyHeader />}></Route> */}
      <Header />
      <Routes>
        <Route index element={<LazyHomePage />} />
        <Route path="/movies" element={<LazySearchPage />} />
        <Route path="/movies/:movieId" element={<LazyMovieDetails />}>
          <Route path="cast" element={<LazyMovieCast />} />
          <Route path="reviews" element={<LazyMovieReviews />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
