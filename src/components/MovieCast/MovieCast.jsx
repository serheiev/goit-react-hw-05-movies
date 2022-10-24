import { Loader } from 'components/Loader/Loader';
import { fetchMovieCast } from 'fetchApi/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './MovieCast.module.scss';

const MovieCast = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const errMessage = 'Sorry, no casts';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMovieCast(movieId);
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
        <ul className={style.castList}>
          {movie.map(el => (
            <li className={style.castItem} key={el.id}>
              {el.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                  alt=""
                  width="100"
                />
              ) : (
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYvi7RcqkGOZrnsNfQAJKwmQjJArBXLT6d6owgfKB&s`}
                  alt=""
                  width="100"
                />
              )}
              <div className={style.castDescWrap}>
                <p className={style.castPar}>
                  <span>Name:</span>
                  {el.name}
                </p>
                <p className={style.castPar}>
                  <span>Character:</span>
                  {el.character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={style.castPar}>errMessage</p>
      )}
    </>
  );
};

export default MovieCast;
