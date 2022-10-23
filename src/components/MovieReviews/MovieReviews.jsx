import { Loader } from 'components/Loader/Loader';
import { fetchMovieReview } from 'fetchApi/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const errMessage = 'Sorry, no reviews';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMovieReview(movieId, '/reviews');
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
