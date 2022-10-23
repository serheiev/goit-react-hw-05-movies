import { Loader } from 'components/Loader/Loader';
import { fetchMovieCast } from 'fetchApi/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const errMessage = 'Sorry, no casts';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMovieCast(movieId, '/credits');
        setMovie(movieById);
      } catch {
        setError(errMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);
  console.log(movie);
  return (
    <>
      {error && <p>{errMessage}</p>}
      {isLoading && <Loader />}
      {movie.cast && (
        <ul>
          {movie.cast.map(el => (
            <li key={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                alt=""
                width="100"
              />
              <p>Name:{el.name}</p>
              <p>Character:{el.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
