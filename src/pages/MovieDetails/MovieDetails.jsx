import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieInformation } from '../../components/MovieInformation/MovieInformation';
import * as API from '../../services/api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    renderMovieDetails();
  }, []);
  // console.log(movie);

  const renderMovieDetails = async () => {
    try {
      const data = await API.getDetails(id);
      // console.log('data', data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <MovieInformation movie={movie} />
    </main>
  );
};
