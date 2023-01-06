import { useState, useEffect } from 'react';

import * as API from '../../services/api';

import { MovieList } from '../../components/MovieList/MovieList';
import { Main, SectionTitle } from '../Home/Home.styled';

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
    <Main>
      <SectionTitle>Trending movies</SectionTitle>
      {trending && <MovieList movies={trending} />}
    </Main>
  );
};
