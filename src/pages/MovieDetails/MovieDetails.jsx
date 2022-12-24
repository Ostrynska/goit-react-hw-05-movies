import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import * as API from '../../services/api';

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

  return (
    <main>
      <button type="button" onClick={handleNavigate}>
        Go back
      </button>
      <h3>
        {title} ({release_date})
      </h3>

      <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title} />
      <h3>
        {title} ({release_date})
      </h3>
      <p>User Score: {popularity}</p>
      <h4>Overview</h4>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
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
    </main>
  );
};
