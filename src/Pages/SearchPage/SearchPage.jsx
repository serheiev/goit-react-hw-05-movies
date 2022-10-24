import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'fetchApi/fetchApi';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import style from './SearchPage.module.scss';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('searchQuery') ?? '';
  const errMessage = 'Sorry, no films by your query';

  const hendleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ searchQuery });
    setMovies([]);
    setError(null);
    return query;
  };

  const onInput = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const getMovies = async query => {
      try {
        setIsLoading(true);
        const movies = await fetchMoviesByQuery(query);
        if (movies.length === 0) {
          throw new Error(errMessage);
        }
        setMovies(movies);
      } catch {
        setError(errMessage);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getMovies(query);
    }
  }, [query]);

  return (
    <section className={style.section}>
      <form className={style.form} onSubmit={hendleFormSubmit}>
        <label className={style.label}>
          <input
            className={style.input}
            type="text"
            placeholder="Search movies"
            value={searchQuery}
            onChange={onInput}
          />
          <button className={style.btn} type="submit">
            Search
          </button>
        </label>
      </form>
      {error && <p>{errMessage}</p>}
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </section>
  );
};

export default SearchPage;
