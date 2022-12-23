import { Link } from 'react-router-dom';
// import { StyledList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  //   const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
