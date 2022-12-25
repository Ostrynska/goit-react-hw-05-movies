import { Link } from 'react-router-dom';
import { MovieListWrapp, MovieListItem } from '../MovieList/MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <MovieListWrapp>
      {movies.map(({ title, id, poster_path }) => (
        <MovieListItem key={id}>
          <Link to={`movies/${id}`}>
            <div>
              <img
                src={'https://image.tmdb.org/t/p/w200' + poster_path}
                alt={title}
              />
              <p>{title}</p>
            </div>
          </Link>
        </MovieListItem>
      ))}
    </MovieListWrapp>
  );
};
