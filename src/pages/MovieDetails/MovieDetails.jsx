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
  MovieSubTitle,
  Text,
  TextAccent,
  TextScore,
} from '../MovieDetails/MovieDetails.styled';
import defaultPosterImage from '../../images/poster.jpg';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const baseURL = 'https://image.tmdb.org/t/p/w400';

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

  const { title, poster_path, release_date, vote_average, overview, genres } =
    details;
  const releaseYear = (release_date || '').slice(0, 4);
  const score = Math.round(vote_average * 10);

  return (
    <Main>
      <Button type="button" onClick={handleNavigate}>
        Go back
      </Button>
      <MovieCard>
        <MovieImage
          src={poster_path ? `${baseURL}${poster_path}` : defaultPosterImage}
          alt={title}
        />
        <MovieInformation>
          <MovieTitle>
            {title} ({releaseYear})
          </MovieTitle>
          <Text>
            <TextAccent>User Score</TextAccent>
            <TextScore>{score}%</TextScore>
          </Text>
          <MovieSubTitle>Overview</MovieSubTitle>
          <Text>{overview}</Text>
          <MovieSubTitle>Genres</MovieSubTitle>
          <Text>{genres && genres.map(genre => genre.name).join(', ')}</Text>
          <MovieSubTitle>Additional Information</MovieSubTitle>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </MovieInformation>
      </MovieCard>

      <Outlet />
    </Main>
  );
};
