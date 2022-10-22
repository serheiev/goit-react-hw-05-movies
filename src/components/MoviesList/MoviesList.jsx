import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(data => (
        <li key={data.id}>
          <Link to={`/movies/${data.id}`}>
            <p>{data.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
