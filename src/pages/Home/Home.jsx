import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from '../../components/MovieList/MovieList';
import * as API from '../../services/api';

export const Home = () => {
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
      <MovieList movies={trending} />
    </main>
  );
};
