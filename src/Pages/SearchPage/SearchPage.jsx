import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'fetchApi/fetchApi';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('searchQuery') ?? '';
  const hendleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ searchQuery });
    setMovies([]);
    setError(null);
    return query;
  };
  // console.log(movies);
  const onInput = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const getMovies = async query => {
      try {
        const movies = await fetchMoviesByQuery(query);
        if (movies.length === 0) {
          throw new Error('Oops!');
        }
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    if (query) {
      getMovies(query);
    }
  }, [query]);

  return (
    <>
      <form onSubmit={hendleFormSubmit}>
        <label>
          <input
            type="text"
            placeholder="Search movies"
            value={searchQuery}
            onChange={onInput}
          />
          <button type="submit">Search</button>
        </label>
      </form>

      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
