import { fetchMovieCast } from 'fetchApi/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieById = await fetchMovieCast(movieId, '/reviews');
        setMovie(movieById);
      } catch {
        setError(error);
      } finally {
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      {movie.results
        ? movie.results.map(el => (
            <li key={el.id}>
              <p>Author:{el.author}</p>
              <p>{el.content}</p>
            </li>
          ))
        : 'Sorry, no reviews for this film =('}
    </>
  );
};
