import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from '../Pages/HomePage/HomePage';
import { SearchPage } from 'Pages/SearchPage/SearchPage';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReviews } from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
