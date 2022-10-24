import { useEffect, useState } from 'react';
import { fetchMovieById } from 'fetchApi/fetchApi';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import style from './MovieDetails.module.scss';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const errMessage = 'Sorry, problemki';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMovieById(movieId);
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
      <section className={style.section}>
        <button
          className={style.btn}
          type="button"
          onClick={() => navigate(location?.state?.from ?? '/')}
        >
          Go back
        </button>
        {isLoading && <Loader />}
        {error && <p>{errMessage}</p>}

        <div className={style.wrapper}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              width="260"
            />
          ) : (
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYvi7RcqkGOZrnsNfQAJKwmQjJArBXLT6d6owgfKB&s`}
              alt=""
              width="260"
            />
          )}

          <div className={style.descWrapper}>
            <h3 className={style.descTitle}>{movie.title}</h3>
            <span>User score</span>
            <h4 className={style.descOwer}>Owerview</h4>
            <p className={style.descPar}>{movie.overview}</p>
            <h5 className={style.descGenres}>Genres</h5>

            {movie.genres && (
              <p className={style.descPar}>
                {movie.genres.map(el => (
                  <span key={el.name}>{el.name}</span>
                ))}
              </p>
            )}
          </div>
        </div>
        <Link className={style.link} to="cast" state={location.state}>
          Cast
        </Link>
        <Link className={style.link} to="reviews" state={location.state}>
          Reviews
        </Link>
      </section>
      <Outlet />
    </>
  );
};

export default MovieDetails;
