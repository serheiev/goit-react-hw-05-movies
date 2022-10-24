import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrendMovies } from 'fetchApi/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import style from './HomePage.module.scss';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const errMessage = 'Oops, some problem';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const trendMovies = await fetchTrendMovies();
        setMovies(trendMovies);
      } catch {
        setError(errMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className={style.section}>
      <h2 className={style.title}>Trend movies on this day for you</h2>
      {error && <p className={style.par}>{errMessage}</p>}
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </section>
  );
};

export default HomePage;
