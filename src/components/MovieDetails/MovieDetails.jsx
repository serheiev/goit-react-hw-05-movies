import { useEffect, useState } from 'react';
import { fetchMovieById } from 'fetchApi/fetchApi';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const goBack = () => {
    navigation(location?.state?.from ?? '/');
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieById = await fetchMovieById(movieId);
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
      <section>
        <button type="button" onClick={goBack}>
          Go back
        </button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            width="260"
          />
          <div>
            <h3>{movie.title}</h3>
            <span>User score</span>
            <h4>Owerview</h4>
            <p>{movie.overview}</p>
            <h5>Genres</h5>

            {movie.genres && (
              <p>
                {movie.genres.map(el => (
                  <span key={el.name}>{el.name}</span>
                ))}
              </p>
            )}
          </div>
        </div>
        <Link to="cast" state={location.state} type="button">
          Cast
        </Link>
        <Link to="reviews" state={location.state} type="button">
          Reviews
        </Link>
      </section>
      <Outlet />
    </>
  );
};
