import { useEffect, useState } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';

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
  AdditionalList,
  AdditionalItem,
} from '../MovieDetails/MovieDetails.styled';

import defaultPosterImage from '../../images/poster.jpg';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const location = useLocation();
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

  const from = location.state?.from ?? '/';

  const { title, poster_path, release_date, vote_average, overview, genres } =
    details;
  const releaseYear = (release_date || '').slice(0, 4);
  const score = Math.round(vote_average * 10);

  return (
    <Main>
      <Button type="button" to={from}>
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
          <AdditionalList>
            <AdditionalItem>
              <Link to="cast" state={{ from }}>
                Cast
              </Link>
            </AdditionalItem>
            <AdditionalItem>
              <Link to="reviews" state={{ from }}>
                Reviews
              </Link>
            </AdditionalItem>
          </AdditionalList>
        </MovieInformation>
      </MovieCard>

      <Outlet />
    </Main>
  );
};
