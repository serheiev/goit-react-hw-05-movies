import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import style from './MovieList.module.scss';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={style.movieList}>
      {movies.map(data => (
        <li className={style.movieItem} key={data.id}>
          <Link
            className={style.movieLink}
            to={`/movies/${data.id}`}
            state={{ from: location }}
          >
            <p className={style.moviePar}>{data.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
