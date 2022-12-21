import { useState, useEffect } from 'react';
import * as API from '../../services/api';
// import { FilmCard } from '../FilmCard/FilmCard';
// import { Link } from 'react-router-dom';

export const TrendingGallery = () => {
  //   const [page, setPage] = useState(1);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
    renderTrending();
  }, []);

  const renderTrending = async () => {
    try {
      const { results } = await API.getTrending();
      setTrending(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Trending movies</h1>
      <ul>
        {trending.map(({ title, id }) => (
          <li key={id}>
            {/* <Link to={`${id}`}> */}
            <p>{title}</p>
            {/* <FilmCard /> */}
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
};
