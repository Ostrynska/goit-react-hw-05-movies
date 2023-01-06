import { useLocation, Link } from 'react-router-dom';
import {
  MovieListWrapp,
  MovieListItem,
  MoviePoster,
  MovieTitle,
} from '../MovieList/MovieList.styled';
import defaultPosterImage from '../../images/poster.jpg';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w200';
  return (
    <MovieListWrapp>
      {movies.map(({ title, id, poster_path }) => (
        <MovieListItem key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            <MoviePoster
              src={
                poster_path ? `${baseURL}${poster_path}` : defaultPosterImage
              }
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </MovieListItem>
      ))}
    </MovieListWrapp>
  );
};
