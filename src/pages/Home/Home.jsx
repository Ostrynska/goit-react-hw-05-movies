import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/api';

export const Home = () => {
  //   const [page, setPage] = useState(1);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
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
    <main>
      <h1>Trending movies</h1>
      <ul>
        {trending.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
