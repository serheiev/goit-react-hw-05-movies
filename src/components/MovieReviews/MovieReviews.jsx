import { Loader } from 'components/Loader/Loader';
import { fetchMovieReview } from 'fetchApi/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './MovieReviews.module.scss';

const MovieReviews = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const errMessage = 'Sorry, no reviews';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMovieReview(movieId);
        setMovie(movieById);
      } catch {
        setError(errMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {error && <p>{errMessage}</p>}
      {isLoading && <Loader />}

      {movie.length ? (
        <ul className={style.reviewList}>
          {movie.map(el => (
            <li className={style.reviewItem} key={el.id}>
              <p className={style.reviewPar}>
                <span>Author:</span>
                {el.author}
              </p>
              <p className={style.reviewPar}>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={style.reviewPar}>{errMessage}</p>
      )}
    </>
  );
};

export default MovieReviews;
