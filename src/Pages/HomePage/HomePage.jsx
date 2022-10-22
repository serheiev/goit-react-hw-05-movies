import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrendMovies } from 'fetchApi/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendMovies = await fetchTrendMovies();
        setMovies(trendMovies);
      } catch {
        setError(error.message);
      } finally {
      }
    };
    fetchMovies();
  }, []);

  return (
    <section>
      <h2>Trend movies on this week for you</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </section>
  );
};
