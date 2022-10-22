import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(data => (
        <li key={data.id}>
          <Link to={`/movies/${data.id}`} state={{ from: location }}>
            <p>{data.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
