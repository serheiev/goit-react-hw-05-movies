import { fetchMovieCast } from 'fetchApi/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieById = await fetchMovieCast(movieId, '/credits');
        setMovie(movieById);
      } catch {
        setError(error);
      } finally {
      }
    };
    fetchMovies();
    //eslint-disable-next-line
  }, []);
  console.log(movie);
  return (
    <>
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
