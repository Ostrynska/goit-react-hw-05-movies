import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import * as API from '../../services/api';
import {
  Button,
  Main,
  MovieCard,
  MovieImage,
  MovieInformation,
  MovieTitle,
  Text,
} from '../MovieDetails/MovieDetails.styled';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    renderMovieDetails();
  }, []);

  const renderMovieDetails = async () => {
    try {
      const results = await API.getDetails(id);
      setDetails(results);
    } catch (error) {
      console.log(error);
    }
  };

  if (!details) return;

  const handleNavigate = async () => {
    navigate('/', { replace: true });
  };

  const { title, poster_path, release_date, popularity, overview, genres } =
    details;
  const releaseYear = (release_date || '').slice(0, 4);

  return (
    <Main>
      <Button type="button" onClick={handleNavigate}>
        Go back
      </Button>
      <MovieCard>
        <MovieImage
          src={'https://image.tmdb.org/t/p/w400' + poster_path}
          alt={title}
        />
        <MovieInformation>
          <MovieTitle>
            {title} ({releaseYear})
          </MovieTitle>
          <Text>
            User Score: <span>{popularity}</span>
          </Text>
          <h4>Overview</h4>
          <Text>{overview}</Text>
          <h4>Genres</h4>
          <Text>{genres && genres.map(genre => genre.name).join(', ')}</Text>
        </MovieInformation>
      </MovieCard>
      <h4>Additional Information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </Main>
  );
};
