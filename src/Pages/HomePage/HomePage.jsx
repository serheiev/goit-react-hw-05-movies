import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrendMovies } from 'fetchApi/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

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
    //eslint-disable-next-line
  }, []);
  console.log(movies);
  return (
    <section>
      <h2>Trend movies on this day for you</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </section>
  );
};
