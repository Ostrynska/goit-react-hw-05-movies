import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

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

  const { title, poster_path, release_date, popularity, overview, genres } =
    details;
  const genreName = genres.map(genres => genres.name);

  console.log(details);

  return (
    <main>
      <button type="button">Go back</button>
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
      <p>{genreName.toString()}</p>
      {/* <p>{genres.map(genre => genre.name)}</p> */}
      <p>Additional Information</p>
    </main>
  );
};
